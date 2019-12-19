import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsUtil } from 'src/app/tabs/tabs-util';
import { SistemaUtil } from '../util/sistema-util';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule {}
