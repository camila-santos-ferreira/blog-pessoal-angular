import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(usuarioLogin: UsuarioLogin) : Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessoalcamila.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalcamila.herokuapp.com/usuarios/cadastrar', usuario)
  }

  

}
