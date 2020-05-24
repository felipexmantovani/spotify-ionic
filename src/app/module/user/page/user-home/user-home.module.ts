import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from '../../../../shared/directive/shared-directive.module';
import { SharedPipeModule } from '../../../../shared/pipe/shared-pipe.module';
import { SongComponentModule } from '../../../song/component/song-component.module';
import { UserHomePageRoutingModule } from './user-home-routing.module';
import { UserHomePage } from './user-home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserHomePageRoutingModule,
    SongComponentModule,
    SharedPipeModule,
    SharedDirectiveModule
  ],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
