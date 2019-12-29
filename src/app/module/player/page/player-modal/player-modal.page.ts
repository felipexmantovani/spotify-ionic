import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Musica } from '../../../biblioteca/model/musica';

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
    this.renderer.setStyle(this.fotoBg.nativeElement, 'background-image', `url(${this.musica.artista.foto})`);
  }

  public fechar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
