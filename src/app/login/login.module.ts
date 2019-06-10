import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { H2LibraryModule } from 'h2-library';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    H2LibraryModule,
    CommonModule,
    LoginRoutingModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
