import { TokenStorageService } from './../services/autenticacao/token.storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent {
  estaLogado: boolean = false

  constructor(private tokenStorageService: TokenStorageService){
    if(tokenStorageService.getToken()){
      this.estaLogado=true
    }
  }
}
