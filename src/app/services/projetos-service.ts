import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProjetos } from '../models/iprojetos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {

  constructor() {
    this.inicializarDados();
  }

  private http = inject(HttpClient);
  private readonly STORAGE_KEY = 'projetos';

  private _projetos = signal<IProjetos[]>([]);

  public projetos = this._projetos.asReadonly();

    private _projetosDestacados = signal<IProjetos[]>([]);

  public projetosDestacados = this._projetosDestacados;

  private jsonUrl = "assets/projetos.json";

  private inicializarDados() {
    const dadosLocais = localStorage.getItem(this.STORAGE_KEY);

    if (dadosLocais) {
      this._projetos.set(JSON.parse(dadosLocais));
      this.buscarProjetosEmDestaque();
    }
    else {
      this.http.get<IProjetos[]>(this.jsonUrl).subscribe({
        next: (dados) => {
          this._projetos.set(dados);
          this.salvarNoStorage(dados);
          this.buscarProjetosEmDestaque();
        },
        error: (err) => {
          throw new Error('Erro ao carregar JSON');
        }
      })
    }
  }

  adicionarProjeto(data: IProjetos) {
    const novo: IProjetos = data;
    this._projetos.update(lista => [...lista, novo])
    this.salvarNoStorage(this._projetos());
  }

  deletar(id: number) {
    this._projetos.update(lista => lista.filter(
      p => p.id !== id
    ));
    this.salvarNoStorage(this._projetos());
  }

  private salvarNoStorage(dados: IProjetos[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dados));
  }

  editarProjeto(id: number, dataAtualizada: Partial<IProjetos>) {
    this._projetos.update(lista =>
      lista.map(projeto =>
        projeto.id === id ? { ...projeto, ...dataAtualizada } : projeto
      )
    );
    this.salvarNoStorage(this._projetos());
  }

  private buscarProjetosEmDestaque(): IProjetos[] {
  const dadosStorage = localStorage.getItem(this.STORAGE_KEY);

  if (dadosStorage) {
    const listaCompleta: IProjetos[] = JSON.parse(dadosStorage);
    const itensFiltrados = listaCompleta.filter(projeto => projeto.destaque === true);

    this._projetosDestacados.set(itensFiltrados);
  }
  return [];
}
}
