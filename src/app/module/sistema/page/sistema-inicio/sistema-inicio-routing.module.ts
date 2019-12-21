import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaInicioPage } from './sistema-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaInicioPageRoutingModule {}
