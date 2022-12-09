import { EquipamentoService } from '../../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-equipamentos',
  templateUrl: './cadastrar-equipamentos.component.html',
  styleUrls: ['./cadastrar-equipamentos.component.css']
})

export class CadastrarEquipamentosComponent{
  constructor(private service: EquipamentoService, private router: Router, private toastr: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  dados: any = []

  cadastrar(dados: any) {
    this.toastr.success("Equipamento cadastrado")
    this.service.cadastrar(dados).subscribe()
    this.router.navigate(['/cadastrar-equipamentos'])
  }


  validate(event:Event, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else{
      if(dados.urlFoto==""){
        dados.urlFoto = "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
      }
      dados.descricao=`${dados.categoria} ${dados.modelo} - ${dados.marca}`
      this.cadastrar(dados)
      form.classList.remove('was-validated');
    }

  }

  limpar(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    form.classList.remove('was-validated');
  }
}
