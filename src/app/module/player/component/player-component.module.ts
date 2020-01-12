import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnLikeComponent } from './player-btn-like/player-btn-like.component';
import { PlayerBtnPlayPauseComponent } from './player-btn-play-pause/player-btn-play-pause.component';
import { PlayerBtnShuffleComponent } from './player-btn-shuffle/player-btn-shuffle.component';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';
import { PlayerTimelineComponent } from './player-timeline/player-timeline.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    PlayerMinimizadoComponent,
    PlayerBtnLikeComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent
  ],
  exports: [
    PlayerMinimizadoComponent,
    PlayerBtnLikeComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent
  ]
})
export class PlayerComponentModule {}
