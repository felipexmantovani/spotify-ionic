import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from '../../../../shared/component/shared-component.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [IonicModule, LoginPageRoutingModule, SharedComponentModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
