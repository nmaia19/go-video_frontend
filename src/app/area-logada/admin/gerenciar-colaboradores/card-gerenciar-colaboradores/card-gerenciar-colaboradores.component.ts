import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
  indisponivelClass: string = ''

  @Input() usuario: any
  @Output() atualizarPagina = new EventEmitter<any>();

  constructor(private userService: UsuarioService, public dialog: MatDialog,  private toastr: ToastrService){
  }

  excluir(id: number) {
    this.userService.excluir(id).subscribe(
      (data:any) => {
        this.toastr.success(data.mensagem)
        this.atualizarPagina.emit(null);
      },
      (err: any) => {
        this.toastr.error(err.error.message)
      }
    )
  }

  abrirModalExclusao(): void {
    const dialogRef = this.dialog.open(ModalConfirmarExclusaoComponent, {
      data: {nome: "usuário"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}`){
        this.excluir(this.usuario.id);
      }
    });
  }

  ngOnInit(): void {
    if(this.usuario.status == "INATIVO"){
      this.indisponivelClass = "status-colaborador-inativo"
    }
  }
}
