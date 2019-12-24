import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaUtil } from '../module/biblioteca/util/biblioteca-util';
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
      {
        path: BibliotecaUtil.SETUP.path.nome,
        loadChildren: () => import('../module/biblioteca/biblioteca.module').then((m) => m.BibliotecaModule)
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
