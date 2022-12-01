import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario: any = []
  emprestimos: any = []

  constructor(private emprestimoService: EmprestimoService, private usuarioService: UsuarioService, private tokenService: TokenStorageService, private router: Router) {
    const idUsuario = this.tokenService.getIdUsuario()
    this.consultarEmprestimosEncerradosPorUsuario(idUsuario)
    this.usuarioService.consultarPorId(idUsuario).subscribe(data => this.usuario = data)
  }

  consultarEmprestimosEncerradosPorUsuario(idUsuario: number) {
    this.emprestimoService.consultarEncerradosPorUsuario(idUsuario).subscribe(data => this.emprestimos = data)
    console.log(this.emprestimos)
  }

  alterarSenha(){
    this.router.navigate(['alterar-senha'])
  }

}
