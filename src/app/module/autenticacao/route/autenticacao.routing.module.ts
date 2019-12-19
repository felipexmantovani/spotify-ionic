import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoUtil } from '../util/autenticacao-util';

const routes: Routes = [
  {
    path: AutenticacaoUtil.SETUP.path.nome,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../page/login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: `${AutenticacaoUtil.SETUP.path.front}/login`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule {}
