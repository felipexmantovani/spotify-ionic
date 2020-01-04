import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ColorPaletteService } from '../../../../core/service/color-palette/color-palette.service';
import { Musica } from '../../../biblioteca/model/musica';
let Vibrant = require('node-vibrant');

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss']
})
export class PlayerModalPage implements OnInit, AfterViewInit {
  @ViewChild('fotoBg', { static: false })
  public fotoBg: ElementRef;

  public tocando: boolean = false;

  public musica: Musica;
  public musicas: Array<Musica>;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private renderer: Renderer2,
    private colorPaletteService: ColorPaletteService
  ) {}

  ngOnInit() {
    this.musica = this.navParams.get('musica');
    this.musicas = this.navParams.get('musicas');
  }

  ngAfterViewInit() {
    this.backgroundColor(this.musica.artista.foto);
  }

  private async backgroundColor(image: string) {
    let palette = await this.colorPaletteService.getByImage(image);
    if (palette) {
      this.renderer.setStyle(this.fotoBg.nativeElement, 'background-color', palette.DarkVibrant.hex);
    }
  }

  public tocar(): void {
    this.tocando = !this.tocando;
  }

  public fechar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
