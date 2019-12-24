import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SistemaUtil } from '../../sistema/util/sistema-util';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad, CanActivate {
  constructor(private autenticacaoSevice: AutenticacaoService, private navController: NavController) {}

  private async verificarAcesso(): Promise<boolean> {
    const logado = await this.autenticacaoSevice.isLogado();
    if (logado) {
      return true;
    } else {
      this.navController.navigateRoot(SistemaUtil.SETUP.path.front);
      return false;
    }
  }

  canLoad(): Promise<boolean> {
    return this.verificarAcesso();
  }

  canActivate(): Promise<boolean> {
    return this.verificarAcesso();
  }
}
