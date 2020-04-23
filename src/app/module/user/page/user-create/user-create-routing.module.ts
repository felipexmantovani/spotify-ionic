import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreatePage } from './user-create.page';

const routes: Routes = [
  {
    path: '',
    component: UserCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreatePageRoutingModule {}
