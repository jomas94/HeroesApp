import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  // heroeSelecionado!:Heroe ;
  nohayHeroe:boolean = false;
  
  constructor(private router:Router, 
    private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino)
    .subscribe( (heroes) =>
      (heroes === []) ? this.nohayHeroe = true : this.heroes = heroes 
     )
  }

  opcionSelecionada(event: MatAutocompleteSelectedEvent){
    
   if(!event.option.value){
     return;
   }

    const heroe:Heroe =  event.option.value;

    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
    .subscribe( heroe => {
      // this.heroeSelecionado = heroe;
      this.router.navigate([`./heroes/${heroe.id}`]);
    
    } );
    
    
  }

}
