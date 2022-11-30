import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-alterar-colaboradores',
  templateUrl: './alterar-colaboradores.component.html',
  styleUrls: ['./alterar-colaboradores.component.css']
})
export class AlterarColaboradoresComponent {
  constructor(private service: UsuarioService) {
    // this.consultar()
  }

  // consultar() {
  //   this.service.consultarPaginado(this.page, this.size).subscribe(data => {
  //     this.equipamentos = data;
  //     this.categoriaFiltro = new Set(this.equipamentos.content.map((e:any)=>e.categoria))
  //     this.marcaFiltro = new Set(this.equipamentos.content.map((e:any)=>e.marca))
  //     this.statusFiltro = new Set(this.equipamentos.content.map((e:any)=>e.status))
  //   })
  //   this.service.consultarPaginado(0, 100).subscribe(data => {this.equipamentosOriginal = data})
  // }

  alterarNomeColaborador(id:number, dados: any) {
    // this.service.alterarNome(dados).subscribe()
    console.log(dados)
  }

}
