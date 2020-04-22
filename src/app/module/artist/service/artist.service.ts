import { Injectable } from '@angular/core';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artist: Artist;

  private artists: Array<Artist>;

  constructor() {}

  public getById(id: number): Artist {
    this.artist = new Artist();
    this.artists = this.getAll();
    this.artists.forEach((artistR: Artist) => {
      if (artistR.id === id) {
        this.artist = artistR;
      }
    });
    return this.artist;
  }

  public getAll(): Array<Artist> {
    this.artists = new Array<Artist>();
    this.artists.push(
      this.create(0, 'Djavan', this.pathPhoto('djavan')),
      this.create(1, 'Oasis', this.pathPhoto('oasis')),
      this.create(2, 'Ultimo', this.pathPhoto('ultimo')),
      this.create(3, 'Foo Fighters', this.pathPhoto('foo-fighters')),
      this.create(4, 'Tião Carreiro e Pardinho', this.pathPhoto('tiao-carreiro-pardinho'))
    );
    return this.artists;
  }

  private create(id: number, name: string, photo: string): Artist {
    this.artist = new Artist();
    this.artist.id = id;
    this.artist.name = name;
    this.artist.photo = photo;
    return this.artist;
  }

  private pathPhoto(arquivo: string): string {
    return `./assets/artists/${arquivo}.jpg`;
  }
}
