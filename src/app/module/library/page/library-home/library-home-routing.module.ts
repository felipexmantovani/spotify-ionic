import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryHomePage } from './library-home.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryHomePageRoutingModule {}
