import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/environment';
import { TokenStorageService } from '../autenticacao/token.storage.service';

const url = environment.apiUrl + "equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http:HttpClient, private tokenService: TokenStorageService) {
  }

  consultar() {
    return this.http.get(url)
  }

  consultarPaginado(page:number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`)
  }

  consultarAtivos(page:number, size: number) {
    return this.http.get(`${url}/ativos?page=${page}&size=${size}`, {headers: this.authorization})
  }

  consultarPorId(id: number) {
    return this.http.get(`${url}/${id}`)
  }

  cadastrar(data: any) {
    return this.http.post(url, data)
  }

  alterar(id: number, data: any) {
    return this.http.put(`${url}/${id}`, data)
  }

  excluir(id: number) {
    return this.http.delete(`${url}/${id}`)
  }
}
