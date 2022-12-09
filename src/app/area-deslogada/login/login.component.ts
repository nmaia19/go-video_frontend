import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from '../../core/services/autenticacao/login.service';
import { TokenStorageService } from '../../core/services/autenticacao/token.storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  loginObj: any = {
    email: '',
    password:''
  };

  estaLogado = false;
  loginFalhou = false;
  msgErro = '';

  constructor(private router: Router, private service: LoginService, private tokenStorage: TokenStorageService, private snackBar: MatSnackBar, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.estaLogado = true;
    }
  }
  async onLogin(input:any){

    const podeLogar: any = await this.service.logar(input.email, input.senha)

    if(podeLogar === true) {
      this.router.navigate(['/inicio'])
    } else {
      if(podeLogar.status ==400){
        this.msgErro = `O campo ${ podeLogar.error[0].campo } ${podeLogar.error[0].erro}`
        if(podeLogar.error[0].erro=="deve ser um endereço de e-mail bem formado"){
          this.msgErro="Insira um e-mail válido"
        }
      }
      else{
        this.msgErro = podeLogar.error.message
      }
      this.abrirMsgErro(this.msgErro)
    }

  }

  abrirMsgErro(msgErro: string){
    this.toastr.error(msgErro)
  }

}
