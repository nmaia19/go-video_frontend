import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password:''
  };
  constructor(private router: Router) { }

  //TODO: implementar os metodos
  onLogin(){
    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
      localStorage.setItem('role','user');
      this.router.navigateByUrl('way2user-dashboard');
    } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
      localStorage.setItem('role','admin');
      this.router.navigateByUrl('way2admin-dash');
    }
  }
}
