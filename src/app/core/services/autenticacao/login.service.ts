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
  ) {}

  public logar(email: string, senha: string): Promise<boolean> {
    return new Promise<boolean> (
      (executor, reject) => {
        this.authService.login(email, senha).subscribe(
          (data:any) => {
            const token:any = jwt(data.token)
            console.log(token);
            this.tokenStorage.salvarToken(data.token, token.exp)
            this.tokenStorage.salvarUsuario(token.sub, token.perfis[0].perfil)
            executor(true)
          },
          (error: any) => {
            reject(error)
          }
        );
      },
    );
  }
}
