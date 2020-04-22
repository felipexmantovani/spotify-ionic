import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LibraryHomePageRoutingModule } from './library-home-routing.module';
import { LibraryHomePage } from './library-home.page';

@NgModule({
  imports: [IonicModule, LibraryHomePageRoutingModule],
  declarations: [LibraryHomePage]
})
export class LibraryHomePageModule {}
