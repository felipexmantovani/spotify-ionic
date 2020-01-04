import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerComponentModule } from '../../component/player-component.module';
import { PlayerModalPageRoutingModule } from './player-modal-routing.module';
import { PlayerModalPage } from './player-modal.page';

@NgModule({
  imports: [CommonModule, IonicModule, PlayerModalPageRoutingModule, PlayerComponentModule],
  declarations: [PlayerModalPage]
})
export class PlayerModalPageModule {}
