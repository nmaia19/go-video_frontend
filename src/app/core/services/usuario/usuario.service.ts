import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { TokenStorageService } from '../autenticacao/token.storage.service';

const url = environment.apiUrl + "usuarios"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  authorization: any = ''

  constructor(private http:HttpClient, private tokenService: TokenStorageService) {
  }

  consultar(page:number, size: number) {
    return this.http.get(`${url}?page=${page}&size=${size}`)
  }

  consultarPorId(id: number) {
    return this.http.get(`${url}/${id}`)
  }

  cadastrar(data: any) {
    return this.http.post(`${url}`, data)
  }

  alterarNome(id: number, data: any) {
    return this.http.put(`${url}/alterarNome/${id}`, data)
  }

  alterarSenha(id: number, data: any) {
    return this.http.put(`${url}/alterarSenha/${id}`, data)
  }

  resetarSenha(id: number) {
    return this.http.put(`${url}/resetarSenha/${id}`, {})
  }

  excluir(id: number) {
    return this.http.delete(`${url}/${id}`)
  }

}
