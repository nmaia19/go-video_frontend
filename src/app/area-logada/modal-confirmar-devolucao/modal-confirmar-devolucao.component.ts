import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmar-devolucao',
  templateUrl: './modal-confirmar-devolucao.component.html',
  styleUrls: ['./modal-confirmar-devolucao.component.css']
})
export class ModalConfirmarDevolucaoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmarDevolucaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {nome: string},
  ) {}

}
