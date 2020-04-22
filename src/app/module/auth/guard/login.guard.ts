import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TABS_CONFIG } from '../../../tabs/tabs.config';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private navController: NavController) {}

  public async canActivate(): Promise<boolean> {
    const logado = await this.authService.isLogado();
    if (logado) {
      this.navController.navigateRoot(TABS_CONFIG.pathFront);
      return false;
    } else {
      return true;
    }
  }
}
