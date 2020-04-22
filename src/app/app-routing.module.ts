import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AUTH_CONFIG } from './module/auth/auth.config';
import { AuthGuard } from './module/auth/guard/auth.guard';
import { SISTEMA_CONFIG } from './module/sistema/sistema.config';
import { USUARIO_CONFIG } from './module/usuario/usuario.config';
import { TABS_CONFIG } from './tabs/tabs.config';

const routes: Routes = [
  {
    path: SISTEMA_CONFIG.path,
    loadChildren: () => import('./module/sistema/sistema.module').then((m) => m.SistemaModule)
  },
  {
    path: AUTH_CONFIG.path,
    loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: USUARIO_CONFIG.path,
    loadChildren: () => import('./module/usuario/usuario.module').then((m) => m.UsuarioModule)
  },
  {
    path: TABS_CONFIG.path,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  { path: '', redirectTo: SISTEMA_CONFIG.path, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
