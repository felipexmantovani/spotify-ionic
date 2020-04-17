import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BIBLIOTECA_CONFIG } from '../module/biblioteca/biblioteca.config';
import { USUARIO_CONFIG } from '../module/usuario/usuario.config';
import { TabsUtil } from './tabs-util';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private pathTabsFront: string = TabsUtil.SETUP.path.front;
  private pathUsuarioFront: string = USUARIO_CONFIG.pathFront;
  private pathBibliotecaFront: string = BIBLIOTECA_CONFIG.pathFont;

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
