import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerModalPageRoutingModule } from './player-modal-routing.module';
import { PlayerModalPage } from './player-modal.page';

@NgModule({
  imports: [CommonModule, IonicModule, PlayerModalPageRoutingModule],
  declarations: [PlayerModalPage]
})
export class PlayerModalPageModule {}
