import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8080/equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http:HttpClient) { }

  cadastrar(data:any) {
    console.log(data)
    return this.http.post(url, data)
  }

  consultar() {
    return this.http.get(url)
  }
}
