import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Musica } from '../../model/musica';
import { PlayerModalPage } from '../../page/player-modal/player-modal.page';
import { MusicaService } from '../../service/musica.service';

@Component({
  selector: 'app-player-minimizado',
  templateUrl: './player-minimizado.component.html',
  styleUrls: ['./player-minimizado.component.scss']
})
export class PlayerMinimizadoComponent implements OnInit {
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
    this.musica = this.musicaService.buscarRandom();
  }

  public favoritar(): void {
    this.favoritada = !this.favoritada;
  }

  public tocar(): void {
    this.tocando = !this.tocando;
  }

  public async modal(): Promise<any> {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
      componentProps: {
        musicas: this.musicas,
        musica: this.musica
      }
    });
    return await modal.present();
  }
}
