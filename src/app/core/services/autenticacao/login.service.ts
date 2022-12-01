import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token.storage.service';
import { UsuarioService } from '../usuario/usuario.service';
import jwt from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private usuarioService: UsuarioService
  ) { }

  public logar(email: string, senha: string): Promise<boolean> {
    return new Promise<boolean>(
      (executor) => {
        this.authService.login(email, senha).subscribe(
          (data: any) => {
            const token: any = jwt(data.token)
            this.tokenStorage.salvarToken(data.token, token.exp)
            executor(true)
          },
          (error: any) => {
            executor(false)
          }
        );
      },
    );
  }
}
