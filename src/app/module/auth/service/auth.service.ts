import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../../core/service/storage/storage.service';
import { TABS_CONFIG } from '../../../tabs/tabs.config';
import { PlayerService } from '../../player/service/player.service';
import { SongService } from '../../song/service/song.service';
import { SYSTEM_CONFIG } from '../../system/system.config';
import { UserService } from '../../user/service/user.service';
import { USER_CONFIG } from '../../user/user.config';
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
    private userService: UserService,
    private songService: SongService,
    private playerService: PlayerService
  ) {}

  public login(login: Login): void {
    this.storageService.setKey(
      AUTH_CONFIG.token,
      `(tokenFake)_${login.auth}_${Math.random()
        .toString(36)
        .slice(-`${login.password.length}`)}`
    );

    this.storageService.setKey(USER_CONFIG.storageKey, JSON.stringify(this.userService.create()));

    this.songService.setStorage();
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
    this.storageService.clearKeys();
    this.navController.navigateRoot(SYSTEM_CONFIG.pathFront);
  }

  public async isLogged(): Promise<boolean> {
    const token = await this.storageService.getKey(AUTH_CONFIG.token);
    return token ? true : false;
  }
}
