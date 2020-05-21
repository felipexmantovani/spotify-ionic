import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Song } from '../../../song/model/song';
import { SongService } from '../../../song/service/song.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-minimized',
  templateUrl: './player-minimized.component.html',
  styleUrls: ['./player-minimized.component.scss']
})
export class PlayerMinimizedComponent implements OnInit, OnDestroy {
  @ViewChild(IonSlides, { static: false })
  public slides: IonSlides;

  public slideOpts: any;

  public song: Song;
  public songs: Array<Song>;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private songService: SongService, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getSongs();
    
    this.subs.push(
      this.songService.songsBS.subscribe((songs) => {
        if (songs && this.song) {
          this.songs = songs;
          this.songs.forEach((songItem) => {
            if (songItem.id === this.song.id) {
              this.song = songItem;
            }
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub ? sub.unsubscribe : null;
    });
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
  }

  public change() {
    this.slides.getSwiper().then(async (value) => {
      const activeSongId = parseInt((value.slides[value.activeIndex] as HTMLElement).id);
      this.song = await this.songService.getById(activeSongId);
    });
  }

  public modal(song: Song): void {
    this.playerService.modal(song, this.songs);
  }
}
