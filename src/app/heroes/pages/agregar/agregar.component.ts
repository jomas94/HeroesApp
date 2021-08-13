import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  constructor(private heroesService: HeroesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap( ({id}) => this.heroesService.getHeroePorId(id) ))
    .subscribe(heroe =>   this.heroe = heroe );
    
  }

  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    
    if( this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe => console.log('actualizando', heroe))
    }else{
      
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes', heroe.id]); 
      });
    }   
      
  }



}
