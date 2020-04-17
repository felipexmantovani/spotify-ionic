import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabsUtil } from '../../../../tabs/tabs-util';
import { USUARIO_CONFIG } from '../../usuario.config';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.page.html',
  styleUrls: ['./usuario-inicio.page.scss']
})
export class UsuarioInicioPage {
  constructor(private router: Router) {}

  public goConfigurar(): void {
    this.router.navigateByUrl(`${TabsUtil.SETUP.path.front}${USUARIO_CONFIG.pathFront}/configurar`);
  }
}
