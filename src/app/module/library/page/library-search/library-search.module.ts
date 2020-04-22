import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LibrarySearchPageRoutingModule } from './library-search-routing.module';
import { LibrarySearchPage } from './library-search.page';

@NgModule({
  imports: [IonicModule, LibrarySearchPageRoutingModule],
  declarations: [LibrarySearchPage]
})
export class LibrarySearchPageModule {}
