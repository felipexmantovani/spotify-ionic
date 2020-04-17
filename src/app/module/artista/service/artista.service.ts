import { Injectable } from '@angular/core';
import { Artista } from '../model/artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  constructor() {}

  public buscarPorId(id: number): Artista {
    let artista: Artista = new Artista();
    let artistas: Array<Artista> = this.buscar();
    artistas.forEach((artistasR: Artista) => {
      if (artistasR.id === id) {
        artista = artistasR;
      }
    });
    return artista;
  }

  public buscar(): Array<Artista> {
    let artistas = new Array<Artista>();
    artistas.push(
      this.novo(0, 'Djavan', this.pathFoto('djavan')),
      this.novo(1, 'Oasis', this.pathFoto('oasis')),
      this.novo(2, 'Ultimo', this.pathFoto('ultimo')),
      this.novo(3, 'Foo Fighters', this.pathFoto('foo-fighters')),
      this.novo(4, 'Tião Carreiro e Pardinho', this.pathFoto('tiao-carreiro-pardinho'))
    );
    return artistas;
  }

  private novo(id: number, nome: string, foto: string): Artista {
    let artista: Artista = new Artista();
    artista.id = id;
    artista.nome = nome;
    artista.foto = foto;
    return artista;
  }

  private pathFoto(arquivo: string): string {
    return `./assets/artistas/${arquivo}.jpg`;
  }
}
