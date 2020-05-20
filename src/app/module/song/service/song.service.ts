import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/service/storage/storage.service';
import { Artist } from '../../artist/model/artist';
import { ArtistService } from '../../artist/service/artist.service';
import { Song } from '../model/song';
import { SONG_COFIG } from '../song.config';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private song: Song;

  private songs: Array<Song>;

  public songsBS: BehaviorSubject<Array<Song>> = new BehaviorSubject(new Array<Song>());

  constructor(private artistService: ArtistService, private storageService: StorageService) {}

  private create(id: number, title: string, artist: Artist): Song {
    this.song = new Song();
    this.song.id = id;
    this.song.title = title;
    this.song.artist = artist;
    return this.song;
  }

  public async getAll() {
    this.songs = await this.getStorage();
    if (!this.songs) {
      this.setStorage();
      this.songs = await this.getStorage();
    }
    return this.songs;
  }

  public async getById(id: number) {
    this.songs = await this.getAll();
    this.songs.forEach((song: Song) => {
      if (song.id === id) {
        this.song = song;
      }
    });
    return this.song;
  }

  public async getRandom() {
    this.songs = await this.getAll();
    let id = Math.round(Math.random() * (this.songs.length - 1) + 0);
    this.song = await this.getById(id);
    return this.song;
  }

  public setStorage(songs?: Array<Song>): void {
    this.songs = new Array<Song>();
    if (!songs) {
      this.songs.push(
        this.create(0, 'Se...', this.artistService.getById(0)),
        this.create(1, 'Wonderwall', this.artistService.getById(1)),
        this.create(2, 'Piccola Stella', this.artistService.getById(2)),
        this.create(3, 'Best of You', this.artistService.getById(3)),
        this.create(4, 'Ferreirinha', this.artistService.getById(4))
      );
    } else {
      this.songs = songs;
    }
    this.storageService.setKey(SONG_COFIG.storageKey, JSON.stringify(this.songs));
    this.songsBS.next(this.songs);
  }

  private getStorage(): Promise<Array<Song>> {
    return new Promise((resolve, reject) => {
      this.storageService
        .getKey(SONG_COFIG.storageKey)
        .then((json: string) => {
          resolve((JSON.parse(json) as Array<Song>));
        })
        .catch((error) => {
          reject(`catch: ${error}`);
        });
    });
  }
}
