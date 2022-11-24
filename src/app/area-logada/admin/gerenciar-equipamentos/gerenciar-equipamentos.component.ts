import { EquipamentoService } from './../../../core/services/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciar-equipamentos',
  templateUrl: './gerenciar-equipamentos.component.html',
  styleUrls: ['./gerenciar-equipamentos.component.css']
})
export class GerenciarEquipamentosComponent {
  equipamentos: any = []

  constructor(private service: EquipamentoService) {
    this.consultar()
  }

  consultar() {
    this.service.consultar().subscribe(data => this.equipamentos = data)
  }
}
