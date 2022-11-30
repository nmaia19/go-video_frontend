import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8080/usuarios"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(url)
  }

  cadastrar(data: any) {
    return this.http.post(`${url}`, data)
  }

  alterarNome(id: number, data: any) {
    return this.http.put(`${url}/alterarNome/${id}`, data)
  }

  alterarSenha(id: number, data: any) {
    return this.http.put(`${url}/alterarSenha/${id}`, data)
  }

}
