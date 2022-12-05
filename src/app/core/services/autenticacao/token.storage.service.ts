import { Injectable } from '@angular/core';
import jwt from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const TOKEN_EXPIRACAO = 'auth-token-expiracao'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public deslogar(): void {
    window.sessionStorage.clear()
    window.location.reload()
  }

  public salvarToken(token: string, expiracao: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
    window.sessionStorage.removeItem(TOKEN_EXPIRACAO)
    window.sessionStorage.setItem(TOKEN_EXPIRACAO, expiracao)
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY)
  }

  public getPerfilUsuario(): any {
    const token: any = jwt(this.getToken())
    return token.perfis[0].perfil
  }

  public getIdUsuario(): any {
    const token: any = jwt(this.getToken())
    return token.sub
  }

  public isAdministrador(): boolean {
    if(this.getPerfilUsuario() == "ROLE_ADMINISTRADOR"){
      return true
    }
    return false
  }

  // public getExpiracaoToken(): number | undefined{
  //   return parseInt(window.sessionStorage.getItem(TOKEN_EXPIRACAO))
  // }

}


