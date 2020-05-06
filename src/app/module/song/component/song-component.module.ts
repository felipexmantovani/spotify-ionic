import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongAvatarComponent } from './song-avatar/song-avatar.component';

@NgModule({
  declarations: [SongAvatarComponent],
  imports: [CommonModule, IonicModule],
  exports: [SongAvatarComponent]
})
export class SongComponentModule {}
