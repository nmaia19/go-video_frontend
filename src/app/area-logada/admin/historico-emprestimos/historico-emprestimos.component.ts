import { EmprestimoService } from './../../../core/services/emprestimo/emprestimo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historico-emprestimos',
  templateUrl: './historico-emprestimos.component.html',
  styleUrls: ['./historico-emprestimos.component.css']
})
export class HistoricoEmprestimosComponent {
  emprestimos: any = []
  emprestimosOriginal: any = []
  page: number = 0
  size: number = 5
  modeloFiltro: Set<string> = new Set<string>()
  usuarioFiltro: Set<string> = new Set<string>()
  paginado: boolean = true
  status: string = ''
  modelo: string = ''
  usuario: string = ''
  estaVazio: boolean = true
  mensagem: string = "empréstimo"

  constructor(private service: EmprestimoService, private route: ActivatedRoute, private router: Router) {
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
    this.service.consultar(this.page, this.size).subscribe(data => {
      this.emprestimos = data;
      this.modeloFiltro = new Set(this.emprestimos.content.map((e:any)=>e.equipamento.modelo))
      this.usuarioFiltro = new Set(this.emprestimos.content.map((e:any)=>e.usuario.nome))
      if(this.emprestimos.content){
        this.estaVazio = false
        this.paginado = true
      }

    })
    this.service.consultar(this.page, this.size).subscribe(data => {this.emprestimosOriginal = data;})
  }

  filtrarPorStatus(event:any){
    this.status = event.target.value
    this.filtrar()
  }

  filtrarPorModelo(event:any){
    this.modelo = event.target.value
    this.filtrar()
  }

  filtrarPorUsuario(event:any){
    this.usuario = event.target.value
    this.filtrar()
  }

  filtrar(){
    let listaModeloFiltrado = []
    let listaUsuario: any[] = []
    let listaStatusFiltrado: any[] = []

    if(this.modelo == '' && this.usuario == '' && this.status == ''){
      window.location.reload()
    }
    else{
      this.paginado = false
      if(this.usuario!=''){
        listaUsuario = this.emprestimosOriginal.content.filter((e: any)=>e.usuario.nome==this.usuario)
      }
      if(this.modelo!=''){
        listaModeloFiltrado = this.emprestimosOriginal.content.filter((e: any)=>e.equipamento.modelo==this.modelo)
      }
      else{
        listaModeloFiltrado = this.emprestimosOriginal.content
      }
      if(this.status!=''){
        if(this.status=="Em Andamento"){
          listaStatusFiltrado = this.emprestimosOriginal.content.filter((e: any)=>e.dataFim==null)
        }
        else if(this.status=="Finalizado"){
          listaStatusFiltrado = this.emprestimosOriginal.content.filter((e: any)=>e.dataFim!=null)
        }
      }

      this.emprestimos.content = listaModeloFiltrado.filter((e:any)=>{
        if(listaUsuario.length==0 || listaUsuario.includes(e)){
          if(listaStatusFiltrado.length==0 || listaStatusFiltrado.includes(e)){
            return e;
          }
        }
      })

    }
  }

  irParaProximaPagina(){
    this.router.navigate(['/historico-emprestimos', this.page+1, this.size])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/historico-emprestimos', this.page-1, this.size])
  }

}
