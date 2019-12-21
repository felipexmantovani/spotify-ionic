import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from '../../../../shared/component/shared-component.module';
import { SistemaInicioPageRoutingModule } from './sistema-inicio-routing.module';
import { SistemaInicioPage } from './sistema-inicio.page';

@NgModule({
  imports: [IonicModule, SistemaInicioPageRoutingModule, SharedComponentModule],
  declarations: [SistemaInicioPage]
})
export class SistemaInicioPageModule {}
