import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BibliotecaComponentModule } from '../module/biblioteca/component/biblioteca-component.module';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [IonicModule, TabsPageRoutingModule, BibliotecaComponentModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
