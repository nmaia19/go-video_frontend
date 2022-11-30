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
  onLogin(){

    const podeLogar = this.service.logar("admin@email.com", "123")
    this.router.navigate(['/inicio'])

    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
  }
}
