import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModalPageModule } from '../../../shared/page/shared-modal/shared-modal.module';
import { PlayerMinimizadoComponent } from './player-minimizado/player-minimizado.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModalPageModule],
  declarations: [PlayerMinimizadoComponent],
  exports: [PlayerMinimizadoComponent]
})
export class BibliotecaComponentModule {}
