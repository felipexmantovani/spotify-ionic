import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../model/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-song-avatar',
  templateUrl: './song-avatar.component.html',
  styleUrls: ['./song-avatar.component.scss']
})
export class SongAvatarComponent implements OnInit {
  @Input()
  public song: Song;

  public songs: Array<Song>;

  @Input()
  public thumbQuantity: number = 4;

  @Input()
  public thumbRounded: boolean = false;

  constructor(private songService: SongService) {}

  ngOnInit() {
    !this.song ? this.getSongs() : null;
  }

  private async getSongs() {
    this.songs = await this.songService.getAll();
    this.songs ? (this.songs = this.songs.filter((song, i) => i < this.thumbQuantity)) : null;
  }
}
