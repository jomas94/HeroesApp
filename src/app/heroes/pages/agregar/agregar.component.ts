import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 4px;
  }
  `
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
    alt_img: '',
    
  }

  constructor(  private heroesService: HeroesService,
                private activateRoute: ActivatedRoute,
                private router: Router,
                private snackBar:MatSnackBar,
                public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    
    if(this.router.url.includes('editar')){
      
      this.activateRoute.params
      .pipe(switchMap( ({id}) => this.heroesService.getHeroePorId(id) ))
      .subscribe(heroe =>   this.heroe = heroe );
    }else{
      return;
    }
    
  }

  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    
    if( this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe => this.mostrarSnakBar('Registro actualizado'))
    }else{
      
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]); 
        this.mostrarSnakBar('Registro actualizado');
      });
    }   
      
  }

  borrarHeroe(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width:'350px',
      data: {...this.heroe}
    })



    // dialog.afterClosed()
    // .pipe(switchMap( (result) => result ? this.heroesService.borrarHeroe(this.heroe.id!) : new BehaviorSubject(false))
    // )
    // .subscribe((resultado) => {
    //   if(resultado){
    //     this.router.navigate(['/heroes/listado'])
    //   }else{
    //     return
    //   }
    // })



    dialog.afterClosed()
    .subscribe(
      (result) => {
        console.log(result);
        
        if (result) {
          this.heroesService.borrarHeroe(this.heroe.id!)
          .subscribe( () => this.router.navigate(['/heroes/listado']));
        }
      }
    )


  }


  mostrarSnakBar( mensaje:string):void {
    
    this.snackBar.open(mensaje, 'ok!',
    {
      duration: 2500
    });
  }

}
