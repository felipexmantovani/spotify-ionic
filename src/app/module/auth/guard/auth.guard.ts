import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SISTEMA_CONFIG } from '../../sistema/sistema.config';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private navController: NavController) {}

  private async isLoggedIn(): Promise<boolean> {
    const logado = await this.authService.isLogado();
    if (logado) {
      return true;
    } else {
      this.navController.navigateRoot(SISTEMA_CONFIG.pathFront);
      return false;
    }
  }

  canLoad(): Promise<boolean> {
    return this.isLoggedIn();
  }

  canActivate(): Promise<boolean> {
    return this.isLoggedIn();
  }
}
