import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LIBRARY_CONFIG } from '../module/library/library.config';
import { USER_CONFIG } from '../module/user/user.config';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: USER_CONFIG.path,
        loadChildren: () => import('../module/user/user.module').then((m) => m.UserModule)
      },
      {
        path: LIBRARY_CONFIG.path,
        loadChildren: () => import('../module/library/library.module').then((m) => m.LibraryModule)
      },
      { path: '', redirectTo: USER_CONFIG.path, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
