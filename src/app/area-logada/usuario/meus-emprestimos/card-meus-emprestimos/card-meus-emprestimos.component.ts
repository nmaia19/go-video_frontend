import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

constructor(private service: EmprestimoService, public dialog: MatDialog, private router: Router, private toastr: ToastrService) {}

devolver(id: number) {
  this.service.devolver(id).subscribe()
  this.toastr.success("Empréstimo encerrado, equipamento disponível para nova locação", "Sucesso!", {
    timeOut: 2000,
  }).onHidden.subscribe(() => window.location.reload())
}


abrirModalDevolucao(): void {
  const dialogRef = this.dialog.open(ModalConfirmarDevolucaoComponent, {
    data: {nome: "emprestimo"},
  });

  dialogRef.afterClosed().subscribe(result => {
    if(`${result}`) {
      this.devolver(this.emprestimo.id);
    }
  });
}
}
