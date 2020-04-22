import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ColorPaletteService } from '../../../../core/service/color-palette/color-palette.service';
import { Song } from '../../../song/model/song';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss']
})
export class PlayerModalPage implements OnInit, AfterViewInit {
  @ViewChild('bgPhoto', { static: false })
  public bgPhoto: ElementRef;

  public song: Song;
  public songs: Array<Song>;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private renderer: Renderer2,
    private colorPaletteService: ColorPaletteService
  ) {}

  ngOnInit() {
    this.song = this.navParams.get('song');
    this.songs = this.navParams.get('songs');
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
