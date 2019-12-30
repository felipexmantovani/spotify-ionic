import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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

  public musica: Musica;
  public musicas: Array<Musica>;

  constructor(private modalController: ModalController, private navParams: NavParams, private renderer: Renderer2) {}

  ngOnInit() {
    this.musica = this.navParams.get('musica');
    this.musicas = this.navParams.get('musicas');
  }

  ngAfterViewInit() {
    Vibrant
      .from(this.musica.artista.foto)
      .getPalette()
      .then((palette: any) => {
        this.renderer.setStyle(this.fotoBg.nativeElement, 'background-color', palette.DarkVibrant.hex);
      })
  }

  public fechar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
