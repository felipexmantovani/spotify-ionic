import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerModalPageModule } from '../page/player-modal/player-modal.module';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';

@NgModule({
  imports: [CommonModule, IonicModule, PlayerModalPageModule],
  declarations: [PlayerMinimizadoComponent],
  exports: [PlayerMinimizadoComponent]
})
export class PlayerComponentModule {}
