import { Component } from '@angular/core';
import { TokenStorageService } from '../services/autenticacao/token.storage.service';

@Component({
  selector: 'app-termos-condicoes',
  templateUrl: './termos-condicoes.component.html',
  styleUrls: ['./termos-condicoes.component.css']
})
export class TermosCondicoesComponent {
  estaLogado: boolean = false

  constructor(private tokenStorageService: TokenStorageService){
    if(tokenStorageService.getToken()){
      this.estaLogado=true
    }
  }
}
