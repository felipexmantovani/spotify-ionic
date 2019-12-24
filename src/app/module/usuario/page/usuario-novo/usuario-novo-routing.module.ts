import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioNovoPage } from './usuario-novo.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioNovoPageRoutingModule {}
