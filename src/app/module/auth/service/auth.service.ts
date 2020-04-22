import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../../core/service/storage/storage.service';
import { TABS_CONFIG } from '../../../tabs/tabs.config';
import { MusicaService } from '../../musica/service/musica.service';
import { PlayerService } from '../../player/service/player.service';
import { SISTEMA_CONFIG } from '../../sistema/sistema.config';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { USUARIO_CONFIG } from '../../usuario/usuario.config';
import { AUTH_CONFIG } from '../auth.config';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginNew: Login = new Login();

  constructor(
    private storageService: StorageService,
    private navController: NavController,
    private usuarioService: UsuarioService,
    private musicaService: MusicaService,
    private playerService: PlayerService
  ) {}

  public login(login: Login): void {
    this.storageService.setKey(
      AUTH_CONFIG.token,
      `(tokenFake)_${login.auth}_${Math.random()
        .toString(36)
        .slice(-`${login.password.length}`)}`
    );

    this.storageService.setKey(USUARIO_CONFIG.storageKey, JSON.stringify(this.usuarioService.novo()));

    this.musicaService.setStorage();
    this.playerService.setStorage();
    this.navController.navigateRoot(TABS_CONFIG.pathFront);
  }

  public loginFake(): void {
    this.loginNew = new Login();
    this.loginNew.auth = 'login_fake';
    this.loginNew.password = '0123456789';
    this.login(this.loginNew);
  }

  public logout(): void {
    this.storageService.removeKey(AUTH_CONFIG.token);
    this.navController.navigateRoot(SISTEMA_CONFIG.pathFront);
  }

  public async isLogado(): Promise<boolean> {
    const token = await this.storageService.getKey(AUTH_CONFIG.token);
    return token ? true : false;
  }
}
