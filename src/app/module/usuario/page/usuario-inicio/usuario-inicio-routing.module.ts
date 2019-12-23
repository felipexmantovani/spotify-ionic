import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioInicioPage } from './usuario-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioInicioPageRoutingModule {}
