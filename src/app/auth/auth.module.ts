import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    AuthRoutingModule,
    MaterialModule

  ]
})
export class AuthModule { }
