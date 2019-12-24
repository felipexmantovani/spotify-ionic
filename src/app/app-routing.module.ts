import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoUtil } from './module/autenticacao/util/autenticacao-util';
import { SistemaUtil } from './module/sistema/util/sistema-util';
import { UsuarioUtil } from './module/usuario/util/usuario-util';

const routes: Routes = [
  {
    path: SistemaUtil.SETUP.path.nome,
    loadChildren: () => import('./module/sistema/sistema.module').then((m) => m.SistemaModule)
  },
  {
    path: AutenticacaoUtil.SETUP.path.nome,
    loadChildren: () => import('./module/autenticacao/autenticacao.module').then((m) => m.AutenticacaoModule)
  },
  {
    path: UsuarioUtil.SETUP.path.nome,
    loadChildren: () => import('./module/usuario/usuario.module').then((m) => m.UsuarioModule)
  },
  { path: '', redirectTo: SistemaUtil.SETUP.path.nome, pathMatch: 'full' },
  {
    path: 'usuario-novo',
    loadChildren: () => import('./module/usuario/page/usuario-novo/usuario-novo.module').then( m => m.UsuarioNovoPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
