import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [IonicModule, LoginPageRoutingModule, ReactiveFormsModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
