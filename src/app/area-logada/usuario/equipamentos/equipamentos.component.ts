import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from '../../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent {
  equipamentos: any = []
  equipamentosOriginal: any = []
  page: number = 0
  size: number = 12
  categoriaFiltro: Set<string> = new Set<string>()
  marcaFiltro: Set<string> = new Set<string>()
  statusFiltro: Set<string> = new Set<string>()
  paginado: boolean = true
  categoria: string = ''
  marca: string = ''
  status: string = ''
  busca: string = ''
  estaVazio: boolean = false
  mensagem: string = "equipamentos"
  naoEncontrado: boolean = false

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
    this.service.consultarPaginado(this.page, this.size).subscribe(data => {
      this.equipamentos = data
      this.categoriaFiltro = new Set(this.equipamentos.content.map((e:any)=>e.categoria))
      this.marcaFiltro = new Set(this.equipamentos.content.map((e:any)=>e.marca))
      this.statusFiltro = new Set(this.equipamentos.content.map((e:any)=>e.status))
      if(this.equipamentos.content.length==0){
        this.estaVazio = true
        this.paginado = false
      }
    })

    this.service.consultarPaginado(0,100).subscribe(data => {this.equipamentosOriginal = data;})
  }

  buscar(value: any){
    this.busca= value.busca
    this.filtrar()
  }

  filtrarCategoria(event: any){
    this.categoria = event.target.value
    this.filtrar()
  }

  filtrarMarca(event: any){
    this.marca = event.target.value
    this.filtrar()
  }

  filtrarStatus(event: any){
    this.status = event.target.value
    this.filtrar()
  }

  filtrar(){
    let listaCategoriaFiltrada = []
    let listaMarcaFiltrada: any[] = []
    let listaStatusFiltrado: any[] = []
    let listaBusca: any[] = []
    let listaEncontrada: any[] = []

    if(this.marca == '' && this.categoria == '' && this.status == '' && this.busca ==''){
      window.location.reload()
    }
    else{
      this.paginado = false
      if(this.categoria!=''){
        listaCategoriaFiltrada = this.equipamentosOriginal.content.filter((e: any)=>e.categoria==this.categoria)
      }
      else{
        listaCategoriaFiltrada = this.equipamentosOriginal.content
      }
      if(this.marca!=''){
        listaMarcaFiltrada = this.equipamentosOriginal.content.filter((e: any)=>e.marca==this.marca)
      }
      if(this.status!=''){
        listaStatusFiltrado = this.equipamentosOriginal.content.filter((e: any)=>e.status==this.status)
      }
      if(this.busca!=''){
        listaBusca = this.equipamentosOriginal.content.filter((e: any)=>{return e.modelo.toLowerCase().includes(this.busca.toLowerCase())})
      }

      listaEncontrada = listaCategoriaFiltrada.filter((e:any)=>{
        if(listaMarcaFiltrada.length==0 || listaMarcaFiltrada.includes(e)){
          if(listaStatusFiltrado.length==0 || listaStatusFiltrado.includes(e)){
            if((listaBusca.length==0 && this.busca=='') || listaBusca.includes(e)){
              return e;
            }
          }
        }
      })

      if(listaEncontrada.length==0){
        this.naoEncontrado=true
      }

      this.equipamentos.content = listaEncontrada
    }

  }
  irParaProximaPagina(){
    this.router.navigate(['/equipamentos', this.page+1, 12])
  }

  irParaPaginaAnterior(){
    this.router.navigate(['/equipamentos', this.page-1, 12])
  }
}
