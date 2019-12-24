import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from '../../autenticacao/guard/autenticacao.guard';

const routes: Routes = [
  {
    path: 'novo',
    loadChildren: () => import('../page/usuario-novo/usuario-novo.module').then((m) => m.UsuarioNovoPageModule)
  },
  {
    path: 'inicio',
    canLoad: [AutenticacaoGuard],
    canActivate: [AutenticacaoGuard],
    loadChildren: () => import('../page/usuario-inicio/usuario-inicio.module').then((m) => m.UsuarioInicioPageModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
