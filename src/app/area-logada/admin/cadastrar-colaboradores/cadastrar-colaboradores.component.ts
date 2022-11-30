import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-colaboradores',
  templateUrl: './cadastrar-colaboradores.component.html',
  styleUrls: ['./cadastrar-colaboradores.component.css']
})
export class CadastrarColaboradoresComponent {
  constructor(private service: UsuarioService) { }

  cadastrarColaborador(id:number, dados: any) {
    // this.service.cadastrar(dados).subscribe()
    console.log(dados)
  }
}
