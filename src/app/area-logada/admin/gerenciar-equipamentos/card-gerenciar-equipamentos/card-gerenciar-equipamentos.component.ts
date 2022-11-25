import { EquipamentoService } from './../../../../core/services/equipamento.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-gerenciar-equipamentos',
  templateUrl: './card-gerenciar-equipamentos.component.html',
  styleUrls: ['./card-gerenciar-equipamentos.component.css']
})
export class CardGerenciarEquipamentosComponent {
  @Input() equipamento: any

  constructor(private service: EquipamentoService) {}

  excluir(id: number) {
    this.service.excluir(id).subscribe()
    window.location.reload()
  }
}
