import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/environment';

const url = environment.apiUrl + "equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(url)
  }

  consultarPaginado(page:number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`)
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
