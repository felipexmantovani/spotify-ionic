import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../../core/service/storage/storage.service';
import { SistemaUtil } from '../../sistema/util/sistema-util';
import { UsuarioUtil } from '../../usuario/util/usuario-util';
import { Login } from '../model/login';
import { AutenticacaoUtil } from '../util/autenticacao-util';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private storageService: StorageService, private navController: NavController) {}

  public login(login: Login): void {
    this.storageService.setKey(
      AutenticacaoUtil.SETUP.storageKey.token,
      `(tokenFake)_${login.autenticacao}_${Math.random()
        .toString(36)
        .slice(-`${login.senha.length}`)}`
    );
    this.navController.navigateRoot(UsuarioUtil.SETUP.path.front);
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
