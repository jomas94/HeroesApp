import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [{
    
    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id: 'Marvel',
    desc: 'Marvel - Comics'
  }
];

  heroe:Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  }

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    
    this.heroesService.agregarHeroe(this.heroe)
    .subscribe();
      
    // })

    
  }



}
