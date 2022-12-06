import { EmprestimoService } from 'src/app/core/services/emprestimo/emprestimo.service';
import { EquipamentoService } from '../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/autenticacao/token.storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalhar-equipamentos',
  templateUrl: './detalhar-equipamentos.component.html',
  styleUrls: ['./detalhar-equipamentos.component.css']
})
export class DetalharEquipamentosComponent {
  equipamento: any = []
  id: any = 0
  isAdmin: boolean = false
  isFree: boolean = true

  constructor(private service: EquipamentoService, private emprestimoService: EmprestimoService, private route: ActivatedRoute, private tokenStorage: TokenStorageService, private router: Router, private toastr: ToastrService) {
    var routeParams = this.route.snapshot.paramMap
    this.id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(this.id).subscribe(data => { this.equipamento = data; this.isFree = this.verificaDisponibilidade()})
    this.isAdmin = this.tokenStorage.isAdministrador()
  }

  reservar() {
    this.emprestimoService.criar(this.id).subscribe()
    this.toastr.success("Empréstimo realizado", "Sucesso!")
    this.router.navigate(['/meus-emprestimos'])
  }

  verificaDisponibilidade() {
    if(this.equipamento.status != "DISPONÍVEL") {
      return false
    }
    return true
  }
}
