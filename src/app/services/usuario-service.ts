import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);
  private readonly STORAGE_KEY = 'usuarios';
  private jsonUrl = 'assets/usuarios.json';

  // 1. Sinal inicializado perfeitamente como Objeto
  private _usuarios = signal<Users>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    img: '',
    descricao: '',
  });

  // 2. Boa prática: Expõe o sinal como Readonly para o componente não alterá-lo direto
  public usuarios = this._usuarios.asReadonly();

  constructor() {
    this.inicializarDados();
  }

  private salvarNoStorage(dados: Users) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dados));
  }

  private inicializarDados() {
    const dadosLocais = localStorage.getItem(this.STORAGE_KEY);

    if (dadosLocais) {
      this._usuarios.set(JSON.parse(dadosLocais));
    } else {
      this.http.get<Users[]>(this.jsonUrl).subscribe({
        next: (dados) => {
          if (dados && dados.length > 0) {
            const usuarioUnico = dados[0];
            this._usuarios.set(usuarioUnico);
            this.salvarNoStorage(usuarioUnico);
          }
        },
        error: (err) => {
          console.error('Erro ao carregar JSON:', err);
        },
      });
    }
  }

  editarPerfil(dataAtualizada: Users) {
    // 4. Usar o .set() é mais limpo quando você substitui o objeto inteiro
    this._usuarios.set(dataAtualizada);
    this.salvarNoStorage(dataAtualizada);
  }
}