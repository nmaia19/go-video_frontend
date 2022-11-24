import { EquipamentoService } from './../../../core/services/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent {
  equipamentos: any = []

  constructor(private service: EquipamentoService) {
    this.consultar()
  }

  consultar() {
    this.service.consultar().subscribe(data => this.equipamentos = data)
  }

}
