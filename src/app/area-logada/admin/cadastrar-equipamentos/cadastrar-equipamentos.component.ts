import { EquipamentoService } from '../../../core/services/equipamento/equipamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-equipamentos',
  templateUrl: './cadastrar-equipamentos.component.html',
  styleUrls: ['./cadastrar-equipamentos.component.css']
})

export class CadastrarEquipamentosComponent{
  constructor(private service: EquipamentoService) {
  }

  dados: any = []


  cadastrar(dados: any) {
    this.service.cadastrar(dados).subscribe()
    window.location.reload()
  }


  validate(event:Event, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      if(dados.urlFoto==""){
        dados.urlFoto = "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
      }
      this.cadastrar(dados)
    }
    form.classList.add('was-validated');

  }
}
