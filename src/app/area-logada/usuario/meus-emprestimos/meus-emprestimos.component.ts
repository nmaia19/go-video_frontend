import { Component } from '@angular/core';
import { EquipamentoService } from 'src/app/core/services/equipamento/equipamento.service';

@Component({
  selector: 'app-meus-emprestimos',
  templateUrl: './meus-emprestimos.component.html',
  styleUrls: ['./meus-emprestimos.component.css']
})
export class MeusEmprestimosComponent {
  equipamentos: any = []

  constructor(private service: EquipamentoService) {
    this.consultar()
  }

  consultar() {
    this.service.consultar().subscribe(data => this.equipamentos = data)
  }
}
