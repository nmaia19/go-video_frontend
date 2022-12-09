import { Component } from '@angular/core';
import { TokenStorageService } from '../services/autenticacao/token.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
