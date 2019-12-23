import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () =>
      import('../page/esqueceu-senha/esqueceu-senha.module').then(
        m => m.EsqueceuSenhaPageModule
      )
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule {}
