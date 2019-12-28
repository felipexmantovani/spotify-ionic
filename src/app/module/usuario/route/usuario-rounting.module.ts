import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'novo',
    loadChildren: () => import('../page/usuario-novo/usuario-novo.module').then((m) => m.UsuarioNovoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('../page/usuario-inicio/usuario-inicio.module').then((m) => m.UsuarioInicioPageModule)
  },
  {
    path: 'configurar',
    loadChildren: () => import('../page/usuario-configurar/usuario-configurar.module').then((m) => m.UsuarioConfigurarPageModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
