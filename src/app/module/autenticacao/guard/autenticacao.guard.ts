import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SISTEMA_CONFIG } from '../../sistema/sistema.config';
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
      this.navController.navigateRoot(SISTEMA_CONFIG.pathFront);
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
