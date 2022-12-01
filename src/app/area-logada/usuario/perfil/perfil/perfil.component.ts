import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  emprestimos: any = []

  constructor(private service: EmprestimoService, private tokenService: TokenStorageService, private router: Router) {
    const idUsuario = this.tokenService.getIdUsuario()
    this.consultarPorUsuario(idUsuario)
  }

  consultarPorUsuario(idUsuario: number) {
    this.service.consultarPorUsuario(idUsuario).subscribe(data => this.emprestimos = data)
  }

  alterarSenha(){
    this.router.navigate(['alterar-senha'])
  }

}
