import { Component } from '@angular/core';

import { TokenStorageService } from '../services/autenticacao/token.storage.service';

@Component({
  selector: 'app-header-branco',
  templateUrl: './header-branco.component.html',
  styleUrls: ['./header-branco.component.css']
})
export class HeaderBrancoComponent {

  constructor(private tokenStorage: TokenStorageService) { }

  perfilAdmnistrativo() : boolean{
    var perfilUsuarioLogado: string = this.tokenStorage.getPerfilUsuario()

    if(perfilUsuarioLogado == "admin@email.com"){
      return true
    }else{
      return false
    }
  }
}
