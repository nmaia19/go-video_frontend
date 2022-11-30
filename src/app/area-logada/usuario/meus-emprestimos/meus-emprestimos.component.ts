import { Component } from '@angular/core';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-meus-emprestimos',
  templateUrl: './meus-emprestimos.component.html',
  styleUrls: ['./meus-emprestimos.component.css']
})
export class MeusEmprestimosComponent {
  emprestimos: any = []

  constructor(private service: EmprestimoService) {
    this.consultarVigentePorUsuario()
  }

  consultarVigentePorUsuario() {
    this.service.consultarVigentePorUsuario(1).subscribe(data => this.emprestimos = data)
  }
}
