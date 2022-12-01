import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/environment';
import { TokenStorageService } from '../autenticacao/token.storage.service';

const url = environment.apiUrl + "equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  authorization: any = ''

  constructor(private http:HttpClient, private tokenService: TokenStorageService) {
    this.authorization = new HttpHeaders({ 'Authorization': 'Bearer ' + tokenService.getToken()})
  }

  consultar() {
    return this.http.get(url, {headers: this.authorization})
  }

  consultarPaginado(page:number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`, {headers: this.authorization})
  }

  consultarPorId(id: number) {
    return this.http.get(`${url}/${id}`, {headers: this.authorization})
  }

  cadastrar(data: any) {
    return this.http.post(url, data, {headers: this.authorization})
  }

  alterar(id: number, data: any) {
    return this.http.put(`${url}/${id}`, data, {headers: this.authorization})
  }

  excluir(id: number) {
    return this.http.delete(`${url}/${id}`, {headers: this.authorization})
  }
}
