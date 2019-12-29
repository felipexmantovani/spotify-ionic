import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Musica } from '../../../biblioteca/model/musica';
import { MusicaService } from '../../../biblioteca/service/musica.service';
import { PlayerModalPage } from '../../page/player-modal/player-modal.page';

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

  public favoritada: boolean = false;

  public tocando: boolean = false;

  public musica: Musica;
  public musicas: Array<Musica>;

  constructor(private musicaService: MusicaService, private modalController: ModalController) {}

  ngOnInit() {
    this.buscarMusicas();
  }

  private buscarMusicas(): void {
    this.musicas = this.musicaService.buscarTodas();
  }

  public initSlide(): void {
    this.musica = this.musicaService.buscarRandom();
    this.slideOpts = {
      initialSlide: 0,
      speed: 100
    };
    this.slides.slideTo(this.musica.id);
    this.mostrarSlide = true;
  }

  public favoritar(): void {
    this.favoritada = !this.favoritada;
  }

  public tocar(): void {
    this.tocando = !this.tocando;
  }

  public async modal(musica: Musica): Promise<any> {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
      componentProps: {
        musicas: this.musicas,
        musica: musica
      }
    });
    return await modal.present();
  }
}
