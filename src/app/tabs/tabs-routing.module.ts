import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaUtil } from '../module/sistema/util/sistema-util';
import { TabsUtil } from './tabs-util';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: TabsUtil.SETUP.path.nome,
    component: TabsPage,
    children: [
      {
        path: SistemaUtil.SETUP.path.nome,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../module/sistema/sistema.module').then(
                m => m.SistemaModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: `${TabsUtil.SETUP.path.front}${SistemaUtil.SETUP.path.front}`,
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: `${TabsUtil.SETUP.path.front}${SistemaUtil.SETUP.path.front}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
