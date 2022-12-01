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
    this.authorization = new HttpHeaders({ 'Authorization': 'Bearer ' + tokenService.getToken()})
  }

  consultar() {
    return this.http.get(url, {headers: this.authorization})
  }

  consultarPorId(id: number) {
    return this.http.get(`${url}/${id}`, {headers: this.authorization})
  }

  cadastrar(data: any) {
    return this.http.post(`${url}`, data, {headers: this.authorization})
  }

  alterarNome(id: number, data: any) {
    return this.http.put(`${url}/alterarNome/${id}`, data, {headers: this.authorization})
  }

  alterarSenha(id: number, data: any) {
    return this.http.put(`${url}/alterarSenha/${id}`, data, {headers: this.authorization})
  }

}
