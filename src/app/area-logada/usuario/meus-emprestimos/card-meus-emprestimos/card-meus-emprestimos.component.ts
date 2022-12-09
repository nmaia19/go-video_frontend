import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ModalConfirmarDevolucaoComponent } from 'src/app/area-logada/modal-confirmar-devolucao/modal-confirmar-devolucao.component';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-card-meus-emprestimos',
  templateUrl: './card-meus-emprestimos.component.html',
  styleUrls: ['./card-meus-emprestimos.component.css']
})
export class CardMeusEmprestimosComponent {
  @Input() emprestimo: any
  @Output() atualizarPagina = new EventEmitter<any>();

constructor(private service: EmprestimoService, public dialog: MatDialog, private toastr: ToastrService) {}

devolver(id: number) {
  this.service.devolver(id).subscribe(
    (data:any)=>{
      this.atualizarPagina.emit(null);
    }
  )
  this.toastr.success("Empréstimo encerrado, equipamento disponível para nova locação")
}


abrirModalDevolucao(): void {
  const dialogRef = this.dialog.open(ModalConfirmarDevolucaoComponent, {
    data: {nome: "equipamento"},
  });

  dialogRef.afterClosed().subscribe(result => {
    if(`${result}`) {
      this.devolver(this.emprestimo.id);
    }
  });
}
}
