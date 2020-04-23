import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomePage } from './user-home.page';

const routes: Routes = [
  {
    path: '',
    component: UserHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomePageRoutingModule {}
