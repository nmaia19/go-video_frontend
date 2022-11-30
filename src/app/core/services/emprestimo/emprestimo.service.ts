import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8080/emprestimos"

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  constructor(private http:HttpClient) { }

  consultar(page: number, size: number) {
    return this.http.get(`${url}?page=${page}?size=${size}`)
  }

  consultarVigentePorUsuario(id: number) {
    return this.http.get(`${url}/vigentes/usuario/${id}`)
  }

  devolver(id: number) {
    return this.http.put(`${url}/encerrar/${id}`,{})
  }

}
