import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaInicioPage } from './biblioteca-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaInicioPageRoutingModule {}
