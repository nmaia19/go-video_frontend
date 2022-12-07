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
  usuariosOriginal: any = []
  statusFiltro: Set<string> = new Set<string>()
  page: number = 0
  size: number = 10
  paginado: boolean = true
  status: string = ''
  busca: string = ''
  estaVazio: boolean = false
  mensagem: string = "usuários"
  naoEncontrado: boolean = false

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    var routeParams = this.route.snapshot.paramMap
    if (routeParams.get('page') != null) {
      this.page = parseInt(routeParams.get('page') || '')
    }
    if (routeParams.get('size') != null) {
      this.size = parseInt(routeParams.get('size') || '')
    }
    this.consultar()
  }

  consultar() {
    this.service.consultar(this.page, this.size).subscribe(data => {
      this.usuarios = data;

      if (this.usuarios.content.length == 0) {
        this.estaVazio = true
        this.paginado = false
      }
    })
    this.service.consultar(0, 100).subscribe(data => {
      this.usuariosOriginal = data;
      this.statusFiltro = new Set(this.usuariosOriginal.content.map((u: any) => u.status))
    })
  }

  atualizarPagina(data: any){
    this.consultar();
  }
  
  irParaProximaPagina() {
    this.router.navigate(['/gerenciar-colaboradores', this.page + 1, this.size])
  }

  irParaPaginaAnterior() {
    this.router.navigate(['/gerenciar-colaboradores', this.page - 1, this.size])
  }

  buscar(value: any) {
    this.busca = value.busca
    this.filtrar()
  }

  filtrarStatus(event: any) {
    this.status = event.target.value
    this.filtrar()
  }

  filtrar() {
    let listaStatusFiltrado: any[] = []
    let listaBusca: any[] = []
    let listaEncontrada: any[]=[]
    this.naoEncontrado=false

    if (this.status == '' && this.busca == '') {
      window.location.reload()
    }
    else {
      this.paginado = false
      if (this.status != '') {
        listaStatusFiltrado = this.usuariosOriginal.content.filter((u: any) =>
          u.status == this.status)
      }
      else{
        listaStatusFiltrado = this.usuariosOriginal.content
      }
      if (this.busca != '') {
        listaBusca = this.usuariosOriginal.content.filter((u: any) => {
          return u.nome.toLowerCase().includes(this.busca.toLowerCase())
        })
      }
    }

    listaEncontrada = listaStatusFiltrado.filter((e:any)=>{
      if((listaBusca.length==0 && this.busca=='') || listaBusca.includes(e)){
        return e;
      }
    })

    if(listaEncontrada.length==0){
      this.naoEncontrado=true
    }

    this.usuarios.content = listaEncontrada
  }
}
