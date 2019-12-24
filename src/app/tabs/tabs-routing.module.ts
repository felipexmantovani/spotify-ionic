import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioUtil } from '../module/usuario/util/usuario-util';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: UsuarioUtil.SETUP.path.nome,
        loadChildren: () => import('../module/usuario/usuario.module').then((m) => m.UsuarioModule)
      },
      { path: '', redirectTo: UsuarioUtil.SETUP.path.nome, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
