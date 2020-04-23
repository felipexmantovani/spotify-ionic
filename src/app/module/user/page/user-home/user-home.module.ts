import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserHomePageRoutingModule } from './user-home-routing.module';
import { UserHomePage } from './user-home.page';

@NgModule({
  imports: [IonicModule, UserHomePageRoutingModule],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
