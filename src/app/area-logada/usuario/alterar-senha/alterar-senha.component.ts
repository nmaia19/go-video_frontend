import { TokenStorageService } from './../../../core/services/autenticacao/token.storage.service';
import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  constructor(private service: UsuarioService, private tokenService: TokenStorageService, private router: Router, private toastr: ToastrService) { }

  alterarSenha(dados: any) {
    this.service.alterarSenha(this.tokenService.getIdUsuario(), dados).subscribe(
      (data:any) => {
        this.router.navigate([`/perfil/${this.tokenService.getIdUsuario()}`])
        this.toastr.success("Sua senha foi alterada!", "Sucesso!")
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Erro:')
      }
    )
  }

  validate(event:Event, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else{
      this.alterarSenha(dados)
      form.classList.remove('was-validated');
    }
  }

}
