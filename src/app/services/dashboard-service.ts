import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private jsonUrl = 'assets/usuarios.json';
  private usuario_key = 'auth-user'

  getUsuarioLogadoId(): number | null{
    const dadosLocalStorage = localStorage.getItem(this.usuario_key);
    if (!dadosLocalStorage) return null;
    try{
      const usuario = JSON.parse(dadosLocalStorage);
      return usuario.id 
    } catch(e) {
        return null;
    }
  }

  getPerfilInfos() : Observable< Users | undefined >{
    const usuarioId = this.getUsuarioLogadoId();

    if(!usuarioId){
      throw new Error('Nenhum usuário logado encontrado');
    }

    return this.http.get<Users[]>(this.jsonUrl).pipe(
      map((perfis : Users[])=>{
        return perfis.find(perfil => perfil.id === usuarioId);
      })
    );
  }

  

}
