import { EmprestimoService } from './../../../../core/services/emprestimo/emprestimo.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-historico-emprestimos',
  templateUrl: './card-historico-emprestimos.component.html',
  styleUrls: ['./card-historico-emprestimos.component.css']
})
export class CardHistoricoEmprestimosComponent {
  @Input() emprestimo: any

  constructor(service: EmprestimoService){}
}
