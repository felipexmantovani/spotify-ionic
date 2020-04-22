import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';

const routes: Routes = [
  {
    path: 'inicio',
    canActivate: [LoginGuard],
    loadChildren: () => import('./page/sistema-inicio/sistema-inicio.module').then((m) => m.SistemaInicioPageModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule {}
