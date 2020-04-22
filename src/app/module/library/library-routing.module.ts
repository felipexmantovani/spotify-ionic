import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./page/library-home/library-home.module').then((m) => m.LibraryHomePageModule)
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./page/library-search/library-search.module').then((m) => m.LibrarySearchPageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
