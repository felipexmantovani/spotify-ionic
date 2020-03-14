import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../../core/service/storage/storage.service';
import { TabsUtil } from '../../../tabs/tabs-util';
import { SistemaUtil } from '../../sistema/util/sistema-util';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { UsuarioUtil } from '../../usuario/util/usuario-util';
import { Login } from '../model/login';
import { AutenticacaoUtil } from '../util/autenticacao-util';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private loginNovo: Login = new Login();

  constructor(
    private storageService: StorageService,
    private navController: NavController,
    private usuarioService: UsuarioService
  ) {}

  public login(login: Login): void {
    this.storageService.setKey(
      AutenticacaoUtil.SETUP.storageKey.token,
      `(tokenFake)_${login.autenticacao}_${Math.random()
        .toString(36)
        .slice(-`${login.senha.length}`)}`
    );

    this.storageService.setKey(UsuarioUtil.SETUP.storageKey.user, JSON.stringify(this.usuarioService.novo()));

    this.navController.navigateRoot(TabsUtil.SETUP.path.front);
  }

  public loginFake(): void {
    this.loginNovo = new Login();
    this.loginNovo.autenticacao = 'login_fake';
    this.loginNovo.senha = '0123456789';
    this.login(this.loginNovo);
  }

  public logout(): void {
    this.storageService.removeKey(AutenticacaoUtil.SETUP.storageKey.token);
    this.navController.navigateRoot(SistemaUtil.SETUP.path.front);
  }

  public async isLogado(): Promise<boolean> {
    const token = await this.storageService.getKey(AutenticacaoUtil.SETUP.storageKey.token);
    return token ? true : false;
  }
}
