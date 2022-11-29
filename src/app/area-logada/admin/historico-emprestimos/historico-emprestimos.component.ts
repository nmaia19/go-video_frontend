import { EmprestimoService } from './../../../core/services/emprestimo/emprestimo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historico-emprestimos',
  templateUrl: './historico-emprestimos.component.html',
  styleUrls: ['./historico-emprestimos.component.css']
})
export class HistoricoEmprestimosComponent {
  emprestimos: any = []
  emprestimosOriginal: any = []
  page: number = 0
  status: string = ''
  modelo: string = ''
  usuario: string = ''
  listStatus: any = []

  constructor(private service: EmprestimoService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    this.page = parseInt(routeParams.get('page') || '')
    this.consultar(this.page)
  }

  consultar(page: number) {
    this.service.consultar(page).subscribe(data => {
      this.emprestimos = data;
      this.emprestimosOriginal = data;
    })
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
    this.listStatus = []
    this.emprestimos = this.emprestimosOriginal

    if(this.status=="Em Andamento"){
      this.emprestimosOriginal.content.forEach((element: any) => {
        if(element.dataFim==null){
          this.listStatus.push(element)
          this.emprestimos.content = this.listStatus;
        }
      });
    }
    else if(this.status=="Finalizado"){
      this.emprestimosOriginal.content.forEach((element: any) => {
        if(element.dataFim!=null){
          this.listStatus.push(element)
          this.emprestimos.content = this.listStatus;
        }
      });
    }
    else{
      this.listStatus = this.emprestimosOriginal.content
      this.emprestimos.content = this.listStatus;
    }
    console.log(this.listStatus)
  }

  // filtrar(){
  //   if(this.status==="Em Andamento"){
  //     this.listStatus = this.emprestimos.content.filter((e:any)=>e.dataFim == null)
  //   }

  //   else if(this.status==="Finalizado"){
  //     this.listStatus.push(this.emprestimosOriginal.content)
  //     this.listStatus = this.emprestimos.content.filter((e:any)=>e.dataFim != null)
  //   }
  //   else{
  //     this.listStatus.push(this.emprestimosOriginal.content)
  //   }

  //   this.emprestimos.content = this.listStatus;

  // }

  irParaProximaPagina(){
    this.router.navigate(['/historico-emprestimos', this.page+1])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/historico-emprestimos', this.page-1])
  }

}
