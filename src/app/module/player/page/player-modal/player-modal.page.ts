import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ColorPaletteService } from '../../../../core/service/color-palette/color-palette.service';
import { Song } from '../../../song/model/song';
import { SongService } from '../../../song/service/song.service';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss']
})
export class PlayerModalPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('bgPhoto', { static: false })
  public bgPhoto: ElementRef;

  public song: Song;
  public songs: Array<Song>;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private renderer: Renderer2,
    private colorPaletteService: ColorPaletteService,
    private songService: SongService
  ) {}

  ngOnInit() {
    this.song = this.navParams.get('song');
    this.songs = this.navParams.get('songs');

    this.subs.push(
      this.songService.songsBS.subscribe((songs) => {
        if (songs) {
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

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub ? sub.unsubscribe : null;
    });
  }

  ngAfterViewInit() {
    this.backgroundColor(this.song.artist.photo);
  }

  private async backgroundColor(image: string) {
    let palette = await this.colorPaletteService.getByImage(image);
    if (palette) {
      this.renderer.setStyle(this.bgPhoto.nativeElement, 'background-color', palette.DarkVibrant.hex);
    }
  }

  public close(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
