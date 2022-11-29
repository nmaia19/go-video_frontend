import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from '../../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciar-equipamentos',
  templateUrl: './gerenciar-equipamentos.component.html',
  styleUrls: ['./gerenciar-equipamentos.component.css']
})

export class GerenciarEquipamentosComponent {
  equipamentos: any = []
  equipamentosOriginal: any = []
  page: number = 0
  size: number = 5
  paginado: boolean = true;

  constructor(private service: EquipamentoService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    if(routeParams.get('page')!=null){
      this.page = parseInt(routeParams.get('page') || '')
    }
    if(routeParams.get('size')!=null){
      this.size = parseInt(routeParams.get('size') || '')
    }
    this.consultar()
  }

  consultar() {
    this.service.consultarPaginado(this.page, this.size).subscribe(data => {this.equipamentos = data})
    this.service.consultarPaginado(0, 100).subscribe(data => {this.equipamentosOriginal = data})
  }


  buscar(value: any){
    const busca = value.busca
    this.equipamentos.content = this.equipamentosOriginal.content.filter((e: any)=>{return e.modelo.toLowerCase().includes(busca.toLowerCase())})
    this.paginado = false

    if(busca == ''){
      this.paginado = true
    }
  }

  irParaProximaPagina(){
    this.router.navigate(['/gerenciar-equipamentos', this.page+1, 5])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/gerenciar-equipamentos', this.page-1, 5])
  }
}
