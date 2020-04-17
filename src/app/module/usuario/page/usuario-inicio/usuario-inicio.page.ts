import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { USUARIO_CONFIG } from '../../usuario.config';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.page.html',
  styleUrls: ['./usuario-inicio.page.scss']
})
export class UsuarioInicioPage {
  constructor(private router: Router) {}

  public goConfigurar(): void {
    this.router.navigateByUrl(`${TABS_CONFIG.pathFront}${USUARIO_CONFIG.pathFront}/configurar`);
  }
}
