import { Component } from '@angular/core';
import { AlterarSenhaService } from './../../../core/services/alterar-senha.service';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  constructor(private service: AlterarSenhaService) { }

  alterarSenha(id:number, dados: any) {
    // this.service.alterar(id, dados).subscribe()
    console.log(dados)
  }

}
