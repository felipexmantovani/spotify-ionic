import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from '../../../../shared/component/shared-component.module';
import { SystemHomePageRoutingModule } from './system-home-routing.module';
import { SystemHomePage } from './system-home.page';

@NgModule({
  imports: [IonicModule, SystemHomePageRoutingModule, SharedComponentModule],
  declarations: [SystemHomePage]
})
export class SystemHomePageModule {}
