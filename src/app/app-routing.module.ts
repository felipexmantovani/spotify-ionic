import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AUTH_CONFIG } from './module/auth/auth.config';
import { AuthGuard } from './module/auth/guard/auth.guard';
import { SYSTEM_CONFIG } from './module/system/system.config';
import { USER_CONFIG } from './module/user/user.config';
import { TABS_CONFIG } from './tabs/tabs.config';

const routes: Routes = [
  {
    path: SYSTEM_CONFIG.path,
    loadChildren: () => import('./module/system/system.module').then((m) => m.SystemModule)
  },
  {
    path: AUTH_CONFIG.path,
    loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: USER_CONFIG.path,
    loadChildren: () => import('./module/user/user.module').then((m) => m.UserModule)
  },
  {
    path: TABS_CONFIG.path,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  { path: '', redirectTo: SYSTEM_CONFIG.path, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
