import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../core/services/autenticacao/login.service';
import { TokenStorageService } from '../../core/services/autenticacao/token.storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginObj: any = {
    email: '',
    password:''
  };

  estaLogado = false;
  loginFalhou = false;
  msgErro = '';

  constructor(private router: Router, private service: LoginService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.estaLogado = true;
    }
  }
  async onLogin(input:any){

    const podeLogar = await this.service.logar(input.email, input.senha)

    if(podeLogar) {
      this.router.navigate(['/inicio'])
    } else {
      alert("deu nao miga")
    }

  }
}
