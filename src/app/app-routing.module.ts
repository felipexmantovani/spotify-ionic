import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AUTENTICACAO_CONFIG } from './module/autenticacao/autenticacao.config';
import { AutenticacaoGuard } from './module/autenticacao/guard/autenticacao.guard';
import { SISTEMA_CONFIG } from './module/sistema/sistema.config';
import { UsuarioUtil } from './module/usuario/util/usuario-util';
import { TabsUtil } from './tabs/tabs-util';

const routes: Routes = [
  {
    path: SISTEMA_CONFIG.path,
    loadChildren: () => import('./module/sistema/sistema.module').then((m) => m.SistemaModule)
  },
  {
    path: AUTENTICACAO_CONFIG.path,
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
  { path: '', redirectTo: SISTEMA_CONFIG.path, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
