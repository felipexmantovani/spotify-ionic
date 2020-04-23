import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [LoginGuard],
    loadChildren: () => import('./page/system-home/system-home.module').then((m) => m.SystemHomePageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
