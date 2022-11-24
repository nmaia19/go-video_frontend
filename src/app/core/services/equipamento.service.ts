import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8080/equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http:HttpClient) { }

  cadastrar(data:any) {
    return this.http.post(url, data)
  }

  consultar() {
    return this.http.get(url)
  }

  excluir(id: number) {
    return this.http.delete(`${url}/${id}`)
  }
}
