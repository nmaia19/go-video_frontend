import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8080/equipamentos"

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(url)
  }
}
