import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USUARIO_KEY_PERFIL = 'auth-user-perfil'
const USUARIO_KEY_ID = 'auth-user-id'
const TOKEN_EXPIRACAO = 'auth-token-expiracao'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public deslogar(): void {
    window.sessionStorage.clear()
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

  public salvarUsuario(id: string, perfil: string): void {
    window.sessionStorage.removeItem(USUARIO_KEY_PERFIL)
    window.sessionStorage.removeItem(USUARIO_KEY_ID)
    window.sessionStorage.setItem(USUARIO_KEY_PERFIL, perfil)
    window.sessionStorage.setItem(USUARIO_KEY_ID, id)
  }

  public getPerfilUsuario(): any {
    return sessionStorage.getItem(USUARIO_KEY_PERFIL)
  }

  public getIdUsuario(): any {
    return sessionStorage.getItem(USUARIO_KEY_ID)
  }

  // public getExpiracaoToken(): number | undefined{
  //   return parseInt(window.sessionStorage.getItem(TOKEN_EXPIRACAO))
  // }

}
