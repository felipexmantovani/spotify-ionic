import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Usuario } from '../model/usuario';
import { USUARIO_CONFIG } from '../usuario.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: Usuario;

  constructor(private storageService: StorageService) {}

  public novo(): Usuario {
    this.usuario = new Usuario();
    this.usuario.nome = 'Felipe',
    this.usuario.sobrenome = 'Mantovani',
    this.usuario.nomeCompleto = `${this.usuario.nome} ${this.usuario.sobrenome}`,
    this.usuario.foto = 'https://avatars1.githubusercontent.com/u/4302885?s=460&v=4'
    return this.usuario;
  }

  public buscarStorage(): Promise<Usuario> {
    this.usuario = new Usuario();
    
    return new Promise((resolve, reject) => {
      this.storageService
        .getKey(USUARIO_CONFIG.storageKey)
        .then((json: string) => {
          resolve((JSON.parse(json) as Usuario));
        })
        .catch((error) => {
          reject(`catch: ${error}`);
        });
    });
  }
}
