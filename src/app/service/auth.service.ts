import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

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

  getUserById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalcamila.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false
    if(environment.token != "") {
      ok = true
    }
    return ok
  }  

}
