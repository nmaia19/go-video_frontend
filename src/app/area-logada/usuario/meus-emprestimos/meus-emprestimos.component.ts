import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../../core/services/usuario/usuario.service';
import { TokenStorageService } from './../../../core/services/autenticacao/token.storage.service';
import { Component } from '@angular/core';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-meus-emprestimos',
  templateUrl: './meus-emprestimos.component.html',
  styleUrls: ['./meus-emprestimos.component.css']
})
export class MeusEmprestimosComponent {
  emprestimos: any = []
  estaVazio: boolean = false
  mensagem: string = "empréstimo ativo"
  page: number = 0
  size: number = 5
  paginado: boolean = false

  constructor(private service: EmprestimoService, private route: ActivatedRoute, private tokenService: TokenStorageService, private router: Router) {
    const idUsuario = this.tokenService.getIdUsuario()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    if(routeParams.get('page')!=null){
      this.page = parseInt(routeParams.get('page') || '')
    }
    if(routeParams.get('size')!=null){
      this.size = parseInt(routeParams.get('size') || '')
    }
    this.consultarVigentePorUsuario(idUsuario)
  }

  consultarVigentePorUsuario(idUsuario: number) {
    this.service.consultarVigentePorUsuario(idUsuario, this.page, this.size).subscribe(data => {
      this.emprestimos = data
      if(this.emprestimos.content.length==0){
        this.estaVazio = true
        this.paginado = false
      }
    })
  }

  irParaProximaPagina(){
    this.router.navigate(['/meus-emprestimos', this.page+1, 5])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/meus-emprestimos', this.page-1, 5])
  }
}
