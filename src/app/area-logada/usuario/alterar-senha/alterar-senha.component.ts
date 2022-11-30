import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario/usuario.service';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  constructor(private service: UsuarioService) { }

  alterarSenha(id:number, dados: any) {
    // this.service.alterarSenha(id, dados).subscribe()
    console.log(dados)
  }

}
