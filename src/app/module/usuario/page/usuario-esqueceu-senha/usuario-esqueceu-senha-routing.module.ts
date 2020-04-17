import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioEsqueceuSenhaPage } from './usuario-esqueceu-senha.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEsqueceuSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioEsqueceuSenhaPageRoutingModule {}
