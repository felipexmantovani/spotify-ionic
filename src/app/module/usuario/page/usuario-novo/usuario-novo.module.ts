import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsuarioNovoPageRoutingModule } from './usuario-novo-routing.module';
import { UsuarioNovoPage } from './usuario-novo.page';

@NgModule({
  imports: [IonicModule, UsuarioNovoPageRoutingModule],
  declarations: [UsuarioNovoPage]
})
export class UsuarioNovoPageModule {}
