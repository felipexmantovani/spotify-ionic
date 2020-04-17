import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioEsqueceuSenhaPageRoutingModule } from './usuario-esqueceu-senha-routing.module';
import { UsuarioEsqueceuSenhaPage } from './usuario-esqueceu-senha.page';

@NgModule({
  imports: [IonicModule, UsuarioEsqueceuSenhaPageRoutingModule, ReactiveFormsModule],
  declarations: [UsuarioEsqueceuSenhaPage]
})
export class UsuarioEsqueceuSenhaPageModule {}
