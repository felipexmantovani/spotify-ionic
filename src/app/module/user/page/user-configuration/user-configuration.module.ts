import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserConfigurationPageRoutingModule } from './user-configuration-routing.module';
import { UserConfigurationPage } from './user-configuration.page';

@NgModule({
  imports: [CommonModule, IonicModule, UserConfigurationPageRoutingModule],
  declarations: [UserConfigurationPage]
})
export class UserConfigurationPageModule {}
