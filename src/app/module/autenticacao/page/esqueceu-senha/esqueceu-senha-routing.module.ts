import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueceuSenhaPage } from './esqueceu-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueceuSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsqueceuSenhaPageRoutingModule {}
