import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { map, Observable, tap } from 'rxjs';

const usuario_key = 'auth-user'

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private router: Router, private http: HttpClient){}

  private jsonUrl = 'assets/usuarios.json';
  currentUser = signal<Users | null>(null);

  login(usuarioData: Pick<Users, 'usuario' | 'senha'>): Observable<Users | undefined>{
    return this.http.get<Users[]>(this.jsonUrl).pipe(
     map((usuarios:Users[])=>{
       const usuarioEcontrado = usuarios.find(
         u => String(u.usuario).trim() === String(usuarioData.usuario).trim() &&
           String(u.senha).trim() === String(usuarioData.senha).trim()
       );
      if(!usuarioEcontrado){
        throw new Error('Usuário ou senha incorretos');
      }
      return usuarioEcontrado;
     }),
     tap((usuarioAutenticado : Users) =>{
      localStorage.setItem(usuario_key, JSON.stringify(usuarioAutenticado));
     })
    )
  }
  logout():void{
    localStorage.removeItem(usuario_key);
    this.currentUser.set(null);
  }
  isLogged():boolean{
    return !!localStorage.getItem(usuario_key);
  }

}
