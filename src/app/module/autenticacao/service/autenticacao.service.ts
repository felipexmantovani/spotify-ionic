import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Login } from '../model/login';
import { AutenticacaoUtil } from '../util/autenticacao-util';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private storageService: StorageService) {}

  public login(login: Login): void {
    this.storageService.setKey(
      AutenticacaoUtil.SETUP.storageKey.token,
      `(tokenFake)_${login.autenticacao}_${Math.random().toString(36).slice(-`${login.senha.length}`)}`
    );
  }

  public logout(): void {
    this.storageService.removeKey(AutenticacaoUtil.SETUP.storageKey.token);
  }

  public async isLogado(): Promise<boolean> {
    const token = await this.storageService.getKey(AutenticacaoUtil.SETUP.storageKey.token);
    return token ? true : false;
  }
}
