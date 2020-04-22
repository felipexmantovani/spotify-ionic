import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Musica } from '../../musica/model/musica';
import { Player } from '../model/player';
import { PlayerModalPage } from '../page/player-modal/player-modal.page';
import { PLAYER_CONFIG } from '../player.config';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private player: Player;

  public playerBS: BehaviorSubject<Player> = new BehaviorSubject(new Player);

  constructor(private modalController: ModalController, private storageService: StorageService) {}

  public like(value: boolean): boolean {
    return !value;
  }

  public async playPause() {
    this.player = await this.getStorage();
    this.player.playing = !this.player.playing;
    this.setStorage(this.player);
  }

  public async shuffle() {
    this.player = await this.getStorage();
    this.player.shuffling = !this.player.shuffling;
    this.setStorage(this.player);
  }

  public async repeat() {
    this.player = await this.getStorage();
    this.player.repeating = !this.player.repeating;
    this.setStorage(this.player);
  }

  public setStorage(player?: Player): void {
    player ? this.player = player : this.player = new Player;
    this.storageService.setKey(PLAYER_CONFIG.storageKey, JSON.stringify(this.player));
    this.playerBS.next(player);
  }

  public getStorage(): Promise<Player> {
    return new Promise((resolve, reject) => {
      this.storageService
        .getKey(PLAYER_CONFIG.storageKey)
        .then((json: string) => {
          resolve((JSON.parse(json) as Player));
        })
        .catch((error) => {
          reject(`catch: ${error}`);
        });
    });
  }

  public async modal(musica: Musica, musicas: Array<Musica>): Promise<any> {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
      componentProps: {
        musicas: musicas,
        musica: musica
      }
    });
    return await modal.present();
  }
}
