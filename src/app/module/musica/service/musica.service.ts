import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Artist } from '../../artist/model/artist';
import { ArtistService } from '../../artist/service/artist.service';
import { Musica } from '../model/musica';
import { MUSICA_COFIG } from '../musica.config';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private musica: Musica;

  private musicas: Array<Musica>;

  constructor(private artistService: ArtistService, private storageService: StorageService) {}

  private create(id: number, title: string, artist: Artist): Musica {
    this.musica = new Musica();
    this.musica.id = id;
    this.musica.title = title;
    this.musica.artist = artist;
    return this.musica;
  }

  public async getAll() {
    this.musicas = await this.getStorage();
    if (this.musicas) {
      return this.musicas;
    } else {
      this.setStorage();
      this.musicas = await this.getStorage();
      return this.musicas;
    }
  }

  public async getById(id: number) {
    this.musicas = await this.getAll();
    this.musicas.forEach((musicaR: Musica) => {
      if (musicaR.id === id) {
        this.musica = musicaR;
      }
    });
    return this.musica;
  }

  public async getRandom() {
    this.musicas = await this.getAll();
    let id = Math.round(Math.random() * (this.musicas.length - 1) + 0);
    this.musica = await this.getById(id);
    return this.musica;
  }

  public setStorage(): void {
    this.musicas = new Array<Musica>();
    this.musicas.push(
      this.create(0, 'Se...', this.artistService.getById(0)),
      this.create(1, 'Wonderwall', this.artistService.getById(1)),
      this.create(2, 'Piccola Stella', this.artistService.getById(2)),
      this.create(3, 'Best of You', this.artistService.getById(3)),
      this.create(4, 'Ferreirinha', this.artistService.getById(4))
    );
    this.storageService.setKey(MUSICA_COFIG.storageKey, JSON.stringify(this.musicas));
  }

  private getStorage(): Promise<Array<Musica>> {
    return new Promise((resolve, reject) => {
      this.storageService
        .getKey(MUSICA_COFIG.storageKey)
        .then((json: string) => {
          resolve((JSON.parse(json) as Array<Musica>));
        })
        .catch((error) => {
          reject(`catch: ${error}`);
        });
    });
  }
}
