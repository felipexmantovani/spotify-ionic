import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaBuscaPage } from './biblioteca-busca.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaBuscaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaBuscaPageRoutingModule {}
