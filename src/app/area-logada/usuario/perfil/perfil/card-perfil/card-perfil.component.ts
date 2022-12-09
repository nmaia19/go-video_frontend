import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';
import { EquipamentoService } from 'src/app/core/services/equipamento/equipamento.service';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent {
  @Input() emprestimo: any
  @Input() equipamento: any

  constructor(private emprestimoService: EmprestimoService, private equipamentoService: EquipamentoService, public dialog: MatDialog) {}

}

