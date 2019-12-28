import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioConfigurarPage } from './usuario-configurar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConfigurarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioConfigurarPageRoutingModule {}
