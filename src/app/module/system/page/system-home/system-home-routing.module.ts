import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemHomePage } from './system-home.page';

const routes: Routes = [
  {
    path: '',
    component: SystemHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemHomePageRoutingModule {}
