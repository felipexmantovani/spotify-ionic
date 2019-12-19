import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [IonicModule, TabsPageRoutingModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
