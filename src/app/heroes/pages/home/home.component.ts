import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  usuario!: string;

  ngOnInit(): void {
    this.usuario = this.authService.auth.usuario
  }

  logout(){

    //Ir al backend
    //un usuario
    // localStorage.clear();
    this.router.navigate(['./auth']);
   }
}
