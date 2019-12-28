import { Injectable } from '@angular/core';
import { Artista } from '../model/artista';
import { Musica } from '../model/musica';
import { ArtistaService } from './artista.service';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  constructor(private artistaService: ArtistaService) {}

  public buscarPorId(id: number): Musica {
    let musica: Musica = new Musica();
    let musicas: Array<Musica> = this.buscarTodas();
    musicas.forEach((musicaR: Musica) => {
      if (musicaR.id === id) {
        musica = musicaR;
      }
    });
    return musica;
  }

  public buscarTodas(): Array<Musica> {
    let musicas = new Array<Musica>();
    musicas.push(
      this.novo(0, 'Se...', this.artistaService.buscarPorId(0)),
      this.novo(1, 'Wonderwall', this.artistaService.buscarPorId(1)),
      this.novo(2, 'Piccola Stella', this.artistaService.buscarPorId(2)),
      this.novo(3, 'Best of You', this.artistaService.buscarPorId(3)),
      this.novo(4, 'Ferreirinha', this.artistaService.buscarPorId(4))
    );
    return musicas;
  }

  private novo(id: number, titulo: string, artista: Artista): Musica {
    let musica: Musica = new Musica();
    musica.id = id;
    musica.titulo = titulo;
    musica.artista = artista;
    return musica;
  }

  public buscarRandom(): Musica {
    let musicas: Array<Musica> = this.buscarTodas();
    let id = Math.round(Math.random() * (musicas.length - 1) + 0);
    return this.buscarPorId(id);
  }
}
