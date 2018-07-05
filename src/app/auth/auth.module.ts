import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
