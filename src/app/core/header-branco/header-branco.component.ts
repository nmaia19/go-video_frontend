import { Component } from '@angular/core';

import { TokenStorageService } from '../services/autenticacao/token.storage.service';

@Component({
  selector: 'app-header-branco',
  templateUrl: './header-branco.component.html',
  styleUrls: ['./header-branco.component.css']
})
export class HeaderBrancoComponent {

  isAdmin: boolean = false
  id: any = 0

  constructor(private tokenStorage: TokenStorageService) {
    this.isAdmin = this.tokenStorage.isAdministrador()
    this.id = this.tokenStorage.getIdUsuario()
  }

  deslogar() {
    this.tokenStorage.deslogar()
  }

}
