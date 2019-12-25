import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class BibliotecaComponentModule {}
