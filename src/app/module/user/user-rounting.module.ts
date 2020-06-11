import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/user-home/user-home.module').then((m) => m.UserHomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./page/user-create/user-create.module').then((m) => m.UserCreatePageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./page/user-configuration/user-configuration.module').then((m) => m.UserConfigurationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./page/user-forgot-password/user-forgot-password.module').then((m) => m.UserForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/user-profile/user-profile.module').then((m) => m.UserProfilePageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
