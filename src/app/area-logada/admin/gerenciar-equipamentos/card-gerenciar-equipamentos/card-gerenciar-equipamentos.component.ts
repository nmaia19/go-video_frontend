
import { EquipamentoService } from './../../../../core/services/equipamento.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarExclusaoComponent } from 'src/app/area-logada/modal-confirmar-exclusao/modal-confirmar-exclusao.component';

@Component({
  selector: 'app-card-gerenciar-equipamentos',
  templateUrl: './card-gerenciar-equipamentos.component.html',
  styleUrls: ['./card-gerenciar-equipamentos.component.css']
})
export class CardGerenciarEquipamentosComponent {
  @Input() equipamento: any

  constructor(private service: EquipamentoService, public dialog: MatDialog) {}

  excluir(id: number) {
    this.service.excluir(id).subscribe()
    window.location.reload()
  }

  abrirModalExclusao(): void {
    const dialogRef = this.dialog.open(ModalConfirmarExclusaoComponent, {
      data: {nome: "equipamento"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}`){
        this.excluir(this.equipamento.id);
      }
    });
  }
}
