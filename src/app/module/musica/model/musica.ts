import { Artista } from '../../artista/model/artista';

export class Musica {
  id: number = null;
  titulo: string = null;
  artista: Artista = new Artista();
}