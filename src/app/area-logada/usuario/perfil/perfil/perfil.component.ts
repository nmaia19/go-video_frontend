import { Router, ActivatedRoute } from '@angular/router';
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
  idUsuario: any = []
  isAdmin: boolean = false
  mensagem: string = "empréstimo encerrado"
  page: number = 0
  size: number = 5
  paginado: boolean = true
  estaVazio = false

  constructor(private emprestimoService: EmprestimoService, private usuarioService: UsuarioService, private tokenService: TokenStorageService, private router: Router, private route: ActivatedRoute) {
    if(!this.tokenService.isAdministrador()){
      this.idUsuario = this.tokenService.getIdUsuario()
    }
    else{
      this.isAdmin = true
      var routeParams = this.route.snapshot.paramMap
      this.idUsuario = parseInt(routeParams.get('id') || '')
    }
    this.usuarioService.consultarPorId(this.idUsuario).subscribe(data => this.usuario = data)

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    if(routeParams.get('page')!=null){
      this.page = parseInt(routeParams.get('page') || '')
    }
    if(routeParams.get('size')!=null){
      this.size = parseInt(routeParams.get('size') || '')
    }
    this.consultarEmprestimosEncerradosPorUsuario(this.idUsuario)
  }

  consultarEmprestimosEncerradosPorUsuario(idUsuario: number) {
    this.emprestimoService.consultarEncerradosPorUsuario(idUsuario, this.page, this.size).subscribe(data => {
      this.emprestimos = data;
      if(this.emprestimos.content.length==0){
        this.estaVazio = true
        this.paginado = false
      }
    })
  }

  alterarSenha(){
    this.router.navigate(['alterar-senha'])
  }

  irParaProximaPagina(){
    this.router.navigate(['/perfil', this.idUsuario, this.page+1, this.size])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/perfil', this.idUsuario, this.page-1, this.size])
  }
}
