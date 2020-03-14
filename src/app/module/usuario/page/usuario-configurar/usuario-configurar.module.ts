import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsuarioConfigurarPageRoutingModule } from './usuario-configurar-routing.module';
import { UsuarioConfigurarPage } from './usuario-configurar.page';

@NgModule({
  imports: [CommonModule, IonicModule, UsuarioConfigurarPageRoutingModule],
  declarations: [UsuarioConfigurarPage]
})
export class UsuarioConfigurarPageModule {}
