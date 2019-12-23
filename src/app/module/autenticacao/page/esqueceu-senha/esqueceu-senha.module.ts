import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EsqueceuSenhaPageRoutingModule } from './esqueceu-senha-routing.module';
import { EsqueceuSenhaPage } from './esqueceu-senha.page';

@NgModule({
  imports: [IonicModule, EsqueceuSenhaPageRoutingModule, ReactiveFormsModule],
  declarations: [EsqueceuSenhaPage]
})
export class EsqueceuSenhaPageModule {}
