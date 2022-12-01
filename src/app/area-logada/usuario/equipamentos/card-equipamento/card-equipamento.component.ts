import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-equipamento',
  templateUrl: './card-equipamento.component.html',
  styleUrls: ['./card-equipamento.component.css']
})
export class CardEquipamentoComponent implements OnInit{
  indisponivelClass: string = ''

  @Input() equipamento: any

  ngOnInit(): void {
    if(this.equipamento.status == "INDISPONÍVEL"){
      this.indisponivelClass = "status-equipamento-indisponivel"
    }
  }
}
