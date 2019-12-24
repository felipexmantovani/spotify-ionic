import { Component } from '@angular/core';
import { BibliotecaUtil } from '../module/biblioteca/util/biblioteca-util';
import { UsuarioUtil } from '../module/usuario/util/usuario-util';
import { TabsUtil } from './tabs-util';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private pathTabsFront: string = TabsUtil.SETUP.path.front;
  private pathUsuarioFront: string = UsuarioUtil.SETUP.path.front;
  private pathBibliotecaFront: string = BibliotecaUtil.SETUP.path.front;

  private pathInicio: string = `${this.pathTabsFront}${this.pathUsuarioFront}/inicio`;
  private pathBuscar: string = `${this.pathTabsFront}${this.pathBibliotecaFront}/buscar`;
  private pathBiblioteca: string = `${this.pathTabsFront}${this.pathBibliotecaFront}/inicio`;

  constructor(private navController: NavController) {}

  public goInicio(): void {
    this.navController.navigateRoot(this.pathInicio);
  }

  public goBuscar(): void {
    this.navController.navigateRoot(this.pathBuscar);
  }

  public goBiblioteca(): void {
    this.navController.navigateRoot(this.pathBiblioteca);
  }
}
