import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './module/autenticacao/guard/autenticacao.guard';
import { AutenticacaoUtil } from './module/autenticacao/util/autenticacao-util';
import { SistemaUtil } from './module/sistema/util/sistema-util';
import { UsuarioUtil } from './module/usuario/util/usuario-util';
import { TabsUtil } from './tabs/tabs-util';

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
  {
    path: TabsUtil.SETUP.path.nome,
    canLoad: [AutenticacaoGuard],
    canActivate: [AutenticacaoGuard],
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  { path: '', redirectTo: SistemaUtil.SETUP.path.nome, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
