import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnFavoritarComponent } from './player-btn-favoritar/player-btn-favoritar.component';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [PlayerMinimizadoComponent, PlayerBtnFavoritarComponent],
  exports: [PlayerMinimizadoComponent, PlayerBtnFavoritarComponent]
})
export class PlayerComponentModule {}
