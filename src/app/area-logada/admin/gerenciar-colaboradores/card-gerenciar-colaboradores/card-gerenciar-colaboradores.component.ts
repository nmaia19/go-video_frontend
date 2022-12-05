import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ModalConfirmarExclusaoComponent,
} from 'src/app/area-logada/modal-confirmar-exclusao/modal-confirmar-exclusao.component';

import { UsuarioService } from '../../../../core/services/usuario/usuario.service';


@Component({
  selector: 'app-card-gerenciar-colaboradores',
  templateUrl: './card-gerenciar-colaboradores.component.html',
  styleUrls: ['./card-gerenciar-colaboradores.component.css']
})
export class CardGerenciarColaboradoresComponent {

  @Input() usuario: any

  constructor(private userService: UsuarioService, public dialog: MatDialog){
  }

  excluir(id: number) {
    this.userService.excluir(id).subscribe()
  }

  abrirModalExclusao(): void {
    const dialogRef = this.dialog.open(ModalConfirmarExclusaoComponent, {
      data: {nome: "usuario"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}`){
        this.excluir(this.usuario.id);
      }
    });
  }
}
