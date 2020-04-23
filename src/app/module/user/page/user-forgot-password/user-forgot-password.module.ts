import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserForgotPasswordPageRoutingModule } from './user-forgot-password-routing.module';
import { UserForgotPasswordPage } from './user-forgot-password.page';

@NgModule({
  imports: [IonicModule, UserForgotPasswordPageRoutingModule, ReactiveFormsModule],
  declarations: [UserForgotPasswordPage]
})
export class UserForgotPasswordPageModule {}
