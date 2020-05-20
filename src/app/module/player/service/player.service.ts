import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Song } from '../../song/model/song';
import { SongService } from '../../song/service/song.service';
import { Player } from '../model/player';
import { PlayerModalPage } from '../page/player-modal/player-modal.page';
import { PLAYER_CONFIG } from '../player.config';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private player: Player;

  public playerBS: BehaviorSubject<Player> = new BehaviorSubject(new Player);

  constructor(private songService: SongService, private modalController: ModalController, private storageService: StorageService) {}

  public async like(song: Song) {
    let songs: Array<Song> = await this.songService.getAll();
    songs.forEach(songItem => {
      if (songItem.id === song.id) {
        songItem.liked = !song.liked;
      }
    });
    this.songService.setStorage(songs);
  }

  public async playPause() {
    this.player = await this.getStorage();
    this.player.playing = !this.player.playing;
    this.setStorage(this.player);
  }

  public async repeat() {
    this.player = await this.getStorage();
    this.player.repeating = !this.player.repeating;
    this.setStorage(this.player);
  }

  public async shuffle() {
    this.player = await this.getStorage();
    this.player.shuffling = !this.player.shuffling;
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

  public async modal(song: Song, songs: Array<Song>): Promise<any> {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
      componentProps: {
        song: song,
        songs: songs
      }
    });
    return await modal.present();
  }
}
