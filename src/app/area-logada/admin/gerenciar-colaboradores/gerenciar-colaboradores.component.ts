import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../../core/services/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciar-colaboradores',
  templateUrl: './gerenciar-colaboradores.component.html',
  styleUrls: ['./gerenciar-colaboradores.component.css']
})
export class GerenciarColaboradoresComponent {
  usuarios: any = []
  page: number = 0

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router){    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    this.page = parseInt(routeParams.get('page') || '')
    this.consultar(this.page)
  }

  consultar(page: number) {
    // this.service.consultar(page).subscribe(data => this.emprestimos = data)
  }

  irParaProximaPagina(){
    this.router.navigate(['/gerenciar-colaboradores', this.page+1])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/gerenciar-colaboradores', this.page-1])
  }

}
