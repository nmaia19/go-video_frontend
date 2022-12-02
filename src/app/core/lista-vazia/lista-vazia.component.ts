import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-vazia',
  templateUrl: './lista-vazia.component.html',
  styleUrls: ['./lista-vazia.component.css']
})
export class ListaVaziaComponent {
  @Input() mensagem: any

}
