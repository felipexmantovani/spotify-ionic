import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TABS_CONFIG } from '../../../tabs/tabs.config';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private autenticacaoSevice: AutenticacaoService, private navController: NavController) {}

  public async canActivate(): Promise<boolean> {
    const logado = await this.autenticacaoSevice.isLogado();
    if (logado) {
      this.navController.navigateRoot(TABS_CONFIG.pathFront);
      return false;
    } else {
      return true;
    }
  }
}
