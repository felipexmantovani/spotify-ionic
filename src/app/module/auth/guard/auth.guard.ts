import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SYSTEM_CONFIG } from '../../system/system.config';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private navController: NavController) {}

  private async isLoggedIn(): Promise<boolean> {
    const logged = await this.authService.isLogged();
    if (logged) {
      return true;
    } else {
      this.navController.navigateRoot(SYSTEM_CONFIG.pathFront);
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
