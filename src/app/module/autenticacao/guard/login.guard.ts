import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TabsUtil } from '../../../tabs/tabs-util';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private autenticacaoSevice: AutenticacaoService, private navController: NavController) {}

  public async canActivate(): Promise<boolean> {
    const logado = await this.autenticacaoSevice.isLogado();
    if (logado) {
      this.navController.navigateRoot(TabsUtil.SETUP.path.front);
      return false;
    } else {
      return true;
    }
  }
}
