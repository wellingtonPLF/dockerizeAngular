import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_Usuario = 'http://localhost:8000/user';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Usuario []>{
    return this.httpClient.get<Usuario []>(`${this.URL_Usuario}/`);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.URL_Usuario}/`, usuario);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_Usuario}/${id}/`);
  }

  pesquisarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_Usuario}/${id}/`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_Usuario}/${usuario.idusuario}/`, usuario);
  }
}