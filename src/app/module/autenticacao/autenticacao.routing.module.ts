import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () =>
      import('./page/esqueceu-senha/esqueceu-senha.module').then(
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
