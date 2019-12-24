import { Component } from '@angular/core';
import { BibliotecaUtil } from '../module/biblioteca/util/biblioteca-util';
import { UsuarioUtil } from '../module/usuario/util/usuario-util';
import { TabsUtil } from './tabs-util';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public pathTabsFront: string = TabsUtil.SETUP.path.front;
  public pathUsuarioFront: string = UsuarioUtil.SETUP.path.front;
  public pathBibliotecaFront: string = BibliotecaUtil.SETUP.path.front;

  public pathInicio: string = `${this.pathTabsFront}${this.pathUsuarioFront}/inicio`;
  public pathBuscar: string = `${this.pathTabsFront}${this.pathBibliotecaFront}/buscar`;
  public pathBiblioteca: string = `${this.pathTabsFront}${this.pathBibliotecaFront}/inicio`;

  constructor() {}
}
