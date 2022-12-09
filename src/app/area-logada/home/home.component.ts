import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAdmin: boolean = false
  id: any = 0

  constructor(private tokenStorage: TokenStorageService) {
    this.isAdmin = this.tokenStorage.isAdministrador()
    this.id = this.tokenStorage.getIdUsuario()
  }

}
