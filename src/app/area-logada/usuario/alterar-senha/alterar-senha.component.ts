import { TokenStorageService } from './../../../core/services/autenticacao/token.storage.service';
import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  constructor(private service: UsuarioService, private tokenService: TokenStorageService, private router: Router) { }

  alterarSenha(dados: any) {

    this.service.alterarSenha(this.tokenService.getIdUsuario(), dados).subscribe(
      (data:any) => {
        console.log("alterou corretamente")
        this.router.navigate([`/perfil/${this.tokenService.getIdUsuario()}`])
      },
      (err: any) => {
        console.log(err.error.message)
      }
    )

  }

}
