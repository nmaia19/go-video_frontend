import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8080/usuarios/alterarSenha"

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  constructor(private http:HttpClient) { }

  alterar(id: number, data: any) {
    return this.http.put(`${url}/${id}`, data)
  }

}
