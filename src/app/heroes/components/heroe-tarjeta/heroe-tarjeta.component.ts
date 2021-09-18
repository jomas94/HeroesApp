import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  
  mat-card{
    margin-top:20px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    /* background-size: cover; */
  }

`]
})
export class HeroeTarjetaComponent {

  @Input()heroe!: Heroe; // ! significa que siempre va a recibir un valor 
  
}
