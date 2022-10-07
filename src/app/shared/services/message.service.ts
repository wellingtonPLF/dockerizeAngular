import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  URL_Message = 'http://localhost:8000/message';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Message []>{
    return this.httpClient.get<Message []>(`${this.URL_Message}/`);
  }

  inserir(message: Message): Observable<Message>{
    return this.httpClient.post<Message>(`${this.URL_Message}/`, message);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_Message}/${id}/`);
  }

  pesquisarPorId(id: number): Observable<Message> {
    return this.httpClient.get<Message>(`${this.URL_Message}/${id}/`);
  }

  atualizar(message: Message): Observable<Message> {
    return this.httpClient.put<Message>(`${this.URL_Message}/${message.idmessage}/`, message);
  }
}
