import { Injectable } from '@angular/core';
import { Playlist } from '../model/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlist: Playlist;

  private playlists: Array<Playlist>;

  constructor() {}

  public getAll(): Array<Playlist> {
    this.playlists = new Array<Playlist>();
    this.playlists.push(
      this.create(0, 'Spotify Ionic'),
      this.create(1, 'Spotify Ionic'),
      this.create(2, 'Spotify Ionic'),
      this.create(3, 'Spotify Ionic'),
      this.create(4, 'Spotify Ionic'),
      this.create(5, 'Spotify Ionic')
    );
    return this.playlists;
  }

  private create(id: number, name: string): Playlist {
    this.playlist = new Playlist();
    this.playlist.id = id;
    this.playlist.name = name;
    return this.playlist;
  }
}
