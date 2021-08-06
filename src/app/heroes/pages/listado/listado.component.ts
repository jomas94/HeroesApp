import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroesListado: Heroe[] =[];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    
    this.heroesService.getHeroes()
    .subscribe(resp => { this.heroesListado = resp })
    
  }


}
