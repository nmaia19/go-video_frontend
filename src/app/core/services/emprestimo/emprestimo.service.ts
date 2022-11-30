import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8080/emprestimos"

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  constructor(private http:HttpClient) { }

  consultar(page: number) {
    return this.http.get(`${url}?page=${page}`)
  }
}
