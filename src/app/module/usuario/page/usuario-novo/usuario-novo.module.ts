import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioNovoPageRoutingModule } from './usuario-novo-routing.module';
import { UsuarioNovoPage } from './usuario-novo.page';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule, UsuarioNovoPageRoutingModule],
  declarations: [UsuarioNovoPage]
})
export class UsuarioNovoPageModule {}
