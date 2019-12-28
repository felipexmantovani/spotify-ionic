import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerModalPageRoutingModule } from './shared-modal-routing.module';
import { SharedModalPage } from './shared-modal.page';

@NgModule({
  imports: [IonicModule, PlayerModalPageRoutingModule],
  declarations: [SharedModalPage]
})
export class SharedModalPageModule {}
