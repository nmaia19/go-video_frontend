import { EquipamentoService } from './../../../core/services/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-equipamentos',
  templateUrl: './cadastrar-equipamentos.component.html',
  styleUrls: ['./cadastrar-equipamentos.component.css']
})
export class CadastrarEquipamentosComponent {
  constructor(private service: EquipamentoService) { }

  dados: any = []

  cadastrar(dados: any) {
    this.service.cadastrar(dados).subscribe()
  }
}
