import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabsUtil } from '../../../../tabs/tabs-util';
import { UsuarioUtil } from '../../util/usuario-util';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.page.html',
  styleUrls: ['./usuario-inicio.page.scss']
})
export class UsuarioInicioPage {
  constructor(private router: Router) {}

  public goConfigurar(): void {
    this.router.navigateByUrl(`${TabsUtil.SETUP.path.front}${UsuarioUtil.SETUP.path.front}/configurar`);
  }
}
