import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongComponentModule } from '../../../song/component/song-component.module';
import { UserHomePageRoutingModule } from './user-home-routing.module';
import { UserHomePage } from './user-home.page';

@NgModule({
  imports: [CommonModule, IonicModule, UserHomePageRoutingModule, SongComponentModule],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
