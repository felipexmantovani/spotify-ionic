import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LIBRARY_CONFIG } from '../module/library/library.config';
import { USUARIO_CONFIG } from '../module/usuario/usuario.config';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: USUARIO_CONFIG.path,
        loadChildren: () => import('../module/usuario/usuario.module').then((m) => m.UsuarioModule)
      },
      {
        path: LIBRARY_CONFIG.path,
        loadChildren: () => import('../module/library/library.module').then((m) => m.LibraryModule)
      },
      { path: '', redirectTo: USUARIO_CONFIG.path, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
