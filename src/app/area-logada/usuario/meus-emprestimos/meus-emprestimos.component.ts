import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-meus-emprestimos',
  templateUrl: './meus-emprestimos.component.html',
  styleUrls: ['./meus-emprestimos.component.css']
})
export class MeusEmprestimosComponent {
  emprestimos: any = []
  page: number = 0

  constructor(private service: EmprestimoService, private route: ActivatedRoute, private router: Router) {  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    if(routeParams.get('page') != null){
      this.page = parseInt(routeParams.get('page') || '')
      console.log(this.page)
    }
    this.consultarVigentePorUsuario()
  }

  consultarVigentePorUsuario() {
    this.service.consultarVigentePorUsuario(1,this.page).subscribe(data => this.emprestimos = data)
  }

  irParaProximaPagina(){
    this.router.navigate(['/meus-emprestimos', this.page+1])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/meus-emprestimos', this.page-1])
  }

}
