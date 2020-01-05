import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnFavoritarComponent } from './player-btn-favoritar/player-btn-favoritar.component';
import { PlayerBtnPlayPauseComponent } from './player-btn-play-pause/player-btn-play-pause.component';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [PlayerMinimizadoComponent, PlayerBtnFavoritarComponent, PlayerBtnPlayPauseComponent],
  exports: [PlayerMinimizadoComponent, PlayerBtnFavoritarComponent, PlayerBtnPlayPauseComponent]
})
export class PlayerComponentModule {}
