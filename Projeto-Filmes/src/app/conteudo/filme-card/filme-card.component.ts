import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Filme } from '../filme';


@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})
export class FilmeCardComponent{

  @Input() filme:Filme; 
  @Output() apaga = new EventEmitter<object>() /*criando um evento/objeto nãoe esta tiopando e, sim atribuindo*/
    

  constructor() { }

  apagaCard():void{
    this.apaga.emit(this.filme); 


  }

}
