import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-meus-emprestimos',
  templateUrl: './card-meus-emprestimos.component.html',
  styleUrls: ['./card-meus-emprestimos.component.css']
})
export class CardMeusEmprestimosComponent {
  @Input() equipamento: any

//   constructor(private service: EmprestimoService, public dialog: MatDialog){}

}
