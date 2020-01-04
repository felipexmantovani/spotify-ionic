import { NgModule } from '@angular/core';
import { PlayerModalPageModule } from '../../module/player/page/player-modal/player-modal.module';

@NgModule({
  imports: [PlayerModalPageModule],
  exports: [PlayerModalPageModule]
})
export class SharedPageModule {}
