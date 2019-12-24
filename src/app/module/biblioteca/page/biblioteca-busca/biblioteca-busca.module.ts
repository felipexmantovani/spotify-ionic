import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BibliotecaBuscaPageRoutingModule } from './biblioteca-busca-routing.module';
import { BibliotecaBuscaPage } from './biblioteca-busca.page';

@NgModule({
  imports: [IonicModule, BibliotecaBuscaPageRoutingModule],
  declarations: [BibliotecaBuscaPage]
})
export class BibliotecaBuscaPageModule {}
