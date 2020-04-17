import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../../core/service/storage/storage.service';
import { TabsUtil } from '../../../tabs/tabs-util';
import { SISTEMA_CONFIG } from '../../sistema/sistema.config';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { USUARIO_CONFIG } from '../../usuario/usuario.config';
import { AUTENTICACAO_CONFIG } from '../autenticacao.config';
import { Login } from '../model/login';

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
      AUTENTICACAO_CONFIG.token,
      `(tokenFake)_${login.autenticacao}_${Math.random()
        .toString(36)
        .slice(-`${login.senha.length}`)}`
    );

    this.storageService.setKey(USUARIO_CONFIG.storageKey, JSON.stringify(this.usuarioService.novo()));

    this.navController.navigateRoot(TabsUtil.SETUP.path.front);
  }

  public loginFake(): void {
    this.loginNovo = new Login();
    this.loginNovo.autenticacao = 'login_fake';
    this.loginNovo.senha = '0123456789';
    this.login(this.loginNovo);
  }

  public logout(): void {
    this.storageService.removeKey(AUTENTICACAO_CONFIG.token);
    this.navController.navigateRoot(SISTEMA_CONFIG.pathFront);
  }

  public async isLogado(): Promise<boolean> {
    const token = await this.storageService.getKey(AUTENTICACAO_CONFIG.token);
    return token ? true : false;
  }
}
