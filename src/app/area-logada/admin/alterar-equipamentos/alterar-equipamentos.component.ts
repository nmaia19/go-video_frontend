import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquipamentoService } from 'src/app/core/services/equipamento/equipamento.service';

@Component({
  selector: 'app-alterar-equipamentos',
  templateUrl: './alterar-equipamentos.component.html',
  styleUrls: ['./alterar-equipamentos.component.css']
})
export class AlterarEquipamentosComponent {
  equipamento: any = []
  disabled: boolean= false

  categorias: string[] = ["Câmera", "Filmadora", "Lente", "Iluminação", "Microfone"]

  constructor(private service: EquipamentoService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    var routeParams = this.route.snapshot.paramMap
    let id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(id).subscribe(data => {
      this.equipamento = data
      if(this.equipamento.urlFoto == "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"){
        this.equipamento.urlFoto = ''
      }
    })
  }

  alterar(id: number, dados: any) {
    this.service.alterar(id, dados).subscribe(
      (data: any) => {
        this.disabled = true
        this.toastr.success("Os dados do equipamento foram alterados", "", {
          timeOut: 2000,
        }).onHidden.subscribe(() => {
          this.router.navigate(['/detalhar-equipamentos/', id]).then(() => {
            window.location.reload();
          })
        })
      },
    )
  }

  validate(event:Event, id:number, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      if(dados.urlFoto==""){
        dados.urlFoto = "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
      }
      dados.descricao=`${dados.categoria} ${dados.modelo} - ${dados.marca}`
      this.alterar(id, dados)
      form.classList.remove('was-validated');
    }
    form.classList.add('was-validated');

  }
}
