import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';
import { EquipamentoService } from '../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';

@Component({
  selector: 'app-detalhar-equipamentos',
  templateUrl: './detalhar-equipamentos.component.html',
  styleUrls: ['./detalhar-equipamentos.component.css']
})
export class DetalharEquipamentosComponent {
  equipamento: any = []
  id: any = 0
  isAdmin: boolean = false

  constructor(private service: EquipamentoService, private emprestimoService: EmprestimoService, private route: ActivatedRoute, private tokenStorage: TokenStorageService, private router: Router) {
    var routeParams = this.route.snapshot.paramMap
    this.id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(this.id).subscribe(data => this.equipamento = data)
    this.isAdmin = this.tokenStorage.isAdministrador()
  }

  reservar() {
    this.emprestimoService.criar(this.id).subscribe()
    this.router.navigate(['/meus-emprestimos']).then(() => {
      window.location.reload();
    })
  }
}
