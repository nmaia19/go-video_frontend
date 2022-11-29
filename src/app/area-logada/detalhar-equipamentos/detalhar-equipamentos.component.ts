import { EquipamentoService } from '../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar-equipamentos',
  templateUrl: './detalhar-equipamentos.component.html',
  styleUrls: ['./detalhar-equipamentos.component.css']
})
export class DetalharEquipamentosComponent {
  equipamento: any = []
  constructor(private service: EquipamentoService, private route: ActivatedRoute) {
    var routeParams = this.route.snapshot.paramMap
    let id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(id).subscribe(data => this.equipamento = data)
  }
}
