import { NgModule } from '@angular/core';
import { PlayerModalPageModule } from './page/player-modal/player-modal.module';

@NgModule({
  imports: [PlayerModalPageModule],
  exports: [PlayerModalPageModule]
})
export class PlayerModule {}
