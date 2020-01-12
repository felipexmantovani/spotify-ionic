import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnFavoritarComponent } from './player-btn-favoritar/player-btn-favoritar.component';
import { PlayerBtnPlayPauseComponent } from './player-btn-play-pause/player-btn-play-pause.component';
import { PlayerBtnShuffleComponent } from './player-btn-shuffle/player-btn-shuffle.component';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';
import { PlayerTimelineComponent } from './player-timeline/player-timeline.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    PlayerMinimizadoComponent,
    PlayerBtnFavoritarComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent
  ],
  exports: [
    PlayerMinimizadoComponent,
    PlayerBtnFavoritarComponent,
    PlayerBtnPlayPauseComponent,
    PlayerTimelineComponent,
    PlayerBtnShuffleComponent
  ]
})
export class PlayerComponentModule {}
