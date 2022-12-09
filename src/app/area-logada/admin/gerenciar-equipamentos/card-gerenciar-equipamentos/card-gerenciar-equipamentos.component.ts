import { EquipamentoService } from 'src/app/core/services/equipamento/equipamento.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarExclusaoComponent } from 'src/app/area-logada/modal-confirmar-exclusao/modal-confirmar-exclusao.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-gerenciar-equipamentos',
  templateUrl: './card-gerenciar-equipamentos.component.html',
  styleUrls: ['./card-gerenciar-equipamentos.component.css']
})
export class CardGerenciarEquipamentosComponent implements OnInit {
  indisponivelOuInativoClass: string = ''

  @Input() equipamento: any
  @Output() atualizarPagina = new EventEmitter<any>();

  constructor(private service: EquipamentoService, public dialog: MatDialog, private router: Router, private toastr: ToastrService) {}

  excluir(id: number) {
    this.service.excluir(id).subscribe(
      (data: any) => {
        this.toastr.success(data.mensagem)
        this.atualizarPagina.emit(null);
      },
      (err: any) => {
        this.toastr.warning(err.error.message, "", {
          timeOut: 4500,
        })
      }
    )
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

  ngOnInit(): void {
    if(this.equipamento.status == "INDISPONÍVEL"){
      this.indisponivelOuInativoClass = "status-equipamento-indisponivel"
    }
    else if(this.equipamento.status =="INATIVO"){
      this.indisponivelOuInativoClass = "status-equipamento-inativo"
    }
  }
}
