import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('../page/biblioteca-inicio/biblioteca-inicio.module').then((m) => m.BibliotecaInicioPageModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule {}
