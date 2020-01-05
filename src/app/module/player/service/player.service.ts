import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Musica } from '../../biblioteca/model/musica';
import { PlayerModalPage } from '../page/player-modal/player-modal.page';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private modalController: ModalController) {}

  public like(value: boolean): boolean {
    return !value;
  }

  public playPause(value: boolean): boolean {
    return !value;
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
