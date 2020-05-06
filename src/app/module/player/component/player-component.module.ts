import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongComponentModule } from '../../song/component/song-component.module';
import { PlayerBtnLikeComponent } from './player-btn-like/player-btn-like.component';
import { PlayerBtnPlayPauseComponent } from './player-btn-play-pause/player-btn-play-pause.component';
import { PlayerBtnRepeatComponent } from './player-btn-repeat/player-btn-repeat.component';
import { PlayerBtnShuffleComponent } from './player-btn-shuffle/player-btn-shuffle.component';
import { PlayerMinimizedComponent } from './player-minimized/player-minimized.component';
import { PlayerTimelineComponent } from './player-timeline/player-timeline.component';

@NgModule({
  imports: [CommonModule, IonicModule, SongComponentModule],
  declarations: [
    PlayerMinimizedComponent,
    PlayerBtnLikeComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent,
    PlayerBtnRepeatComponent
  ],
  exports: [
    PlayerMinimizedComponent,
    PlayerBtnLikeComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent,
    PlayerBtnRepeatComponent
  ]
})
export class PlayerComponentModule {}
