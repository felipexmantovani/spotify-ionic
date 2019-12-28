import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModalPage } from './shared-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SharedModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerModalPageRoutingModule {}
