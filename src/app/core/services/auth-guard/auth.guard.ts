import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../autenticacao/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenStorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isAuthenticated = this.authService.getAuthStatus();
      if (isAuthenticated) {
        let role = this.tokenService.getPerfilUsuario()
        if(route.data['role'] && route.data['role'].indexOf(role) === -1){
          this.router.navigate(['']);
          return false;
        }

        return true;
      }

      this.router.navigate(['']);
      return false;
  }

}
