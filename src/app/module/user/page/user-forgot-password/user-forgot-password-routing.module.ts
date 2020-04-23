import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserForgotPasswordPage } from './user-forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: UserForgotPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserForgotPasswordPageRoutingModule {}
