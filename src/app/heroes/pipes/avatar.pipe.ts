import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'avatar',
  // pure: false
})
export class AvatarPipe implements PipeTransform {

  transform(heroe: Heroe):string |undefined {
    
    if(heroe.img_avatar){
      return heroe.img_avatar;
    }else if( heroe.alt_img ){
      return heroe.alt_img;
    }else if( heroe.id && !heroe.alt_img ) {
      return `assets/no-image.png`;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
 }
}