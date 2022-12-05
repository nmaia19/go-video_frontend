import { TokenStorageService } from './../autenticacao/token.storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';

const url = environment.apiUrl + "emprestimos"

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  authorization: any = ''

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
    this.authorization = new HttpHeaders({ 'Authorization': 'Bearer ' + tokenService.getToken()})
  }

  criar(idEquipamento: number) {
    return this.http.post(`${url}/${idEquipamento}`, null, {headers: this.authorization})
  }

  consultar(page: number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`, {headers: this.authorization})
  }

  consultarVigentePorUsuario(id: number, page: number, size: number) {
    return this.http.get(`${url}/vigentes/usuario/${id}?page=${page}&size=${size}`, {headers: this.authorization})
  }

  consultarPorUsuario(id: number) {
    return this.http.get(`${url}/usuario/${id}`, {headers: this.authorization})
  }

  devolver(id: number) {
    return this.http.put(`${url}/encerrar/${id}`, {}, {headers: this.authorization})
  }

  consultarEncerradosPorUsuario(id: number) {
    return this.http.get(`${url}/encerrados/usuario/${id}`, {headers: this.authorization})
  }
}
