import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { Player } from '../../../player/model/player';
import { PlayerService } from '../../../player/service/player.service';
import { Playlist } from '../../../playlist/model/playlist';
import { PlaylistService } from '../../../playlist/service/playlist.service';
import { Song } from '../../../song/model/song';
import { SongService } from '../../../song/service/song.service';
import { USER_CONFIG } from '../../user.config';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss']
})
export class UserHomePage implements OnInit, OnDestroy {
  @ViewChild('slides', { static: false })
  public slides: IonSlides;

  public slidesOpts: any;

  public playlists: Array<Playlist>;

  public songs: Array<Song>;

  public player: Player;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private playlistService: PlaylistService,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.getPlaylist();
    this.getSongs();
    this.getPlayer();

    this.subs.push(
      this.playerService.playerBS.subscribe((player) => {
        if (player) {
          this.player = player;
        }
      }),
      this.songService.songsBS.subscribe((songs) => {
        if (songs) {
          this.songs = songs;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe);
  }

  private async getSongs() {
    this.songs = await this.songService.getAll();
  }

  private getPlaylist(): void {
    this.playlists = this.playlistService.getAll();
  }

  public goConfiguration(): void {
    this.router.navigateByUrl(`${TABS_CONFIG.pathFront}${USER_CONFIG.pathFront}/configuration`);
  }

  public initSlide(): void {
    this.slidesOpts = {
      freeMode: true,
      speed: 100,
      slidesPerView: 2.8,
      spaceBetween: 16
    };
  }

  private async getPlayer() {
    this.player = await this.playerService.getStorage();
  }
}
