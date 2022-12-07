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
  indisponivelClass: string = ''
  disabled: boolean = false

  constructor(private service: EquipamentoService, private emprestimoService: EmprestimoService, private route: ActivatedRoute, private tokenStorage: TokenStorageService, private router: Router, private toastr: ToastrService) {
    var routeParams = this.route.snapshot.paramMap
    this.id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(this.id).subscribe(data => { this.equipamento = data; this.isFree = this.verificaDisponibilidade()})
    this.isAdmin = this.tokenStorage.isAdministrador()
  }

  reservar() {
    this.emprestimoService.criar(this.id).subscribe(
      (data: any) => {
        this.disabled = true
        this.isFree=false
        this.equipamento.status="INDISPONÍVEL"
        this.toastr.success("Empréstimo realizado", "", {
          timeOut: 2000,
        }).onHidden.subscribe(() => {
          this.router.navigate(['/meus-emprestimos'])
        })
      },
    )
  }

  verificaDisponibilidade() {
    if(this.equipamento.status != "DISPONÍVEL") {
      this.indisponivelClass = "status-equipamento-indisponivel"
      return false
    }
    return true
  }
}
