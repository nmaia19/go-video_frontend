import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmar-exclusao',
  templateUrl: './modal-confirmar-exclusao.component.html',
  styleUrls: ['./modal-confirmar-exclusao.component.css']
})
export class ModalConfirmarExclusaoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmarExclusaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {nome: string},
  ) {}

}
