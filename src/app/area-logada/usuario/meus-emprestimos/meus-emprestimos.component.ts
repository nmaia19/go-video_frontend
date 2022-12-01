import { UsuarioService } from './../../../core/services/usuario/usuario.service';
import { TokenStorageService } from './../../../core/services/autenticacao/token.storage.service';
import { Component } from '@angular/core';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-meus-emprestimos',
  templateUrl: './meus-emprestimos.component.html',
  styleUrls: ['./meus-emprestimos.component.css']
})
export class MeusEmprestimosComponent {
  emprestimos: any = []

  constructor(private service: EmprestimoService, private tokenService: TokenStorageService) {
    const idUsuario = this.tokenService.getIdUsuario()
    this.consultarVigentePorUsuario(idUsuario)
  }

  consultarVigentePorUsuario(idUsuario: number) {
    this.service.consultarVigentePorUsuario(idUsuario).subscribe(data => this.emprestimos = data)
  }
}
