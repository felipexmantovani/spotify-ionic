import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Playlist } from '../../../playlist/model/playlist';
import { PlaylistService } from '../../../playlist/service/playlist.service';
import { Song } from '../../../song/model/song';
import { SongService } from '../../../song/service/song.service';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit, AfterViewChecked {
  @ViewChild('infos', { static: false })
  public infos: ElementRef;

  @ViewChild('userBox', { static: false })
  public userBox: ElementRef;

  public user: User;

  public songs: Array<Song>;

  public playlists: Array<Playlist>;

  constructor(
    private userService: UserService,
    private songService: SongService,
    private playlistService: PlaylistService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getPlaylist();
    this.getSongs();
  }

  ngAfterViewChecked(): void {
    let userBoxHeight = (<HTMLElement>this.userBox.nativeElement).children[0].clientHeight;
    this.renderer.setStyle(this.infos.nativeElement, 'margin-top', `${userBoxHeight}px`);
  }

  private async getUser() {
    this.user = await this.userService.getStorage();
  }

  private async getSongs() {
    this.songs = await this.songService.getAll();
  }

  private getPlaylist(): void {
    this.playlists = this.playlistService.getAll();
  }
}
