import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Song } from '../../../song/model/song';
import { SongService } from '../../../song/service/song.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-minimizado',
  templateUrl: './player-minimizado.component.html',
  styleUrls: ['./player-minimizado.component.scss']
})
export class PlayerMinimizadoComponent implements OnInit {
  @ViewChild(IonSlides, { static: false })
  public slides: IonSlides;
  public slideOpts: Object;
  public mostrarSlide: boolean = false;

  public song: Song;
  public songs: Array<Song>;

  constructor(private songService: SongService, private playerService: PlayerService) {}

  ngOnInit() {
    this.getSongs();
  }

  private async getSongs() {
    this.songs = await this.songService.getAll();
  }

  public async initSlide() {
    this.song = await this.songService.getRandom();
    this.slideOpts = {
      initialSlide: 0,
      speed: 100
    };
    this.slides.slideTo(this.song.id);
    this.mostrarSlide = true;
  }

  public modal(song: Song): void {
    this.playerService.modal(song, this.songs);
  }
}
