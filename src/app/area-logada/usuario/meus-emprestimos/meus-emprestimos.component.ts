import { EquipamentoService } from './../../../core/services/equipamento.service';
import { Component } from '@angular/core';

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