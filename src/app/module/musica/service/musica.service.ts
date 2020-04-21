import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Artista } from '../../artista/model/artista';
import { ArtistaService } from '../../artista/service/artista.service';
import { Musica } from '../model/musica';
import { MUSICA_COFIG } from '../musica.config';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private musica: Musica;

  private musicas: Array<Musica>;

  constructor(private artistaService: ArtistaService, private storageService: StorageService) {}

  public async buscarPorId(id: number) {
    this.musicas = await this.buscarTodas();
    this.musicas.forEach((musicaR: Musica) => {
      if (musicaR.id === id) {
        this.musica = musicaR;
      }
    });
    return this.musica;
  }

  public async buscarTodas() {
    this.musicas = await this.getListaStorage();
    if (this.musicas) {
      return this.musicas;
    } else {
      this.setListaStorage();
      this.musicas = await this.getListaStorage();
      return this.musicas;
    }
  }

  private novo(id: number, titulo: string, artista: Artista): Musica {
    this.musica = new Musica();
    this.musica.id = id;
    this.musica.titulo = titulo;
    this.musica.artista = artista;
    return this.musica;
  }

  public async buscarRandom() {
    this.musicas = await this.buscarTodas();
    let id = Math.round(Math.random() * (this.musicas.length - 1) + 0);
    this.musica = await this.buscarPorId(id);
    return this.musica;
  }

  private setListaStorage(): void {
    let musicas = new Array<Musica>();
    musicas.push(
      this.novo(0, 'Se...', this.artistaService.buscarPorId(0)),
      this.novo(1, 'Wonderwall', this.artistaService.buscarPorId(1)),
      this.novo(2, 'Piccola Stella', this.artistaService.buscarPorId(2)),
      this.novo(3, 'Best of You', this.artistaService.buscarPorId(3)),
      this.novo(4, 'Ferreirinha', this.artistaService.buscarPorId(4))
    );

    this.storageService.setKey(MUSICA_COFIG.storageKey, JSON.stringify(musicas));
  }

  private getListaStorage(): Promise<Array<Musica>> {
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
