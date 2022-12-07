import { TokenStorageService } from './../autenticacao/token.storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';

const url = environment.apiUrl + "emprestimos"

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
  }

  criar(idEquipamento: number) {
    return this.http.post(`${url}/${idEquipamento}`, null)
  }

  consultar(page: number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`)
  }

  consultarVigentePorUsuario(id: number, page: number, size: number) {
    return this.http.get(`${url}/vigentes/usuario/${id}?page=${page}&size=${size}`)
  }

  consultarPorUsuario(id: number) {
    return this.http.get(`${url}/usuario/${id}`)
  }

  devolver(id: number) {
    return this.http.put(`${url}/encerrar/${id}`, {})
  }

  consultarEncerradosPorUsuario(id: number, page: number, size: number) {
    return this.http.get(`${url}/encerrados/usuario/${id}?page=${page}&size=${size}`)
  }
}
