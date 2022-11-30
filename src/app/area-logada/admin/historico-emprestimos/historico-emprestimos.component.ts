import { EmprestimoService } from './../../../core/services/emprestimo/emprestimo.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historico-emprestimos',
  templateUrl: './historico-emprestimos.component.html',
  styleUrls: ['./historico-emprestimos.component.css']
})
export class HistoricoEmprestimosComponent {
  emprestimos: any = []
  page: number = 0

  constructor(private service: EmprestimoService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    this.page = parseInt(routeParams.get('page') || '')
    this.consultar(this.page)
  }

  consultar(page: number) {
    this.service.consultar(page).subscribe(data => this.emprestimos = data)
  }

  irParaProximaPagina(){
    this.router.navigate(['/historico-emprestimos', this.page+1])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/historico-emprestimos', this.page-1])
  }

}
