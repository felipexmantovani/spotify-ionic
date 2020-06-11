import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from '../../../../shared/directive/shared-directive.module';
import { SongComponentModule } from '../../../song/component/song-component.module';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePage } from './user-profile.page';

@NgModule({
  imports: [CommonModule, IonicModule, UserProfilePageRoutingModule, SongComponentModule, SharedDirectiveModule],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
