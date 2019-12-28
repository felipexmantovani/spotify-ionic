import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlayerComponentModule } from '../module/player/component/player-component.module';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [IonicModule, TabsPageRoutingModule, PlayerComponentModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
