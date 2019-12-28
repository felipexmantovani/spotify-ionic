import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedModalPage } from '../../../../shared/page/shared-modal/shared-modal.page';
import { Musica } from '../../model/musica';
import { MusicaService } from '../../service/musica.service';

@Component({
  selector: 'app-player-minimizado',
  templateUrl: './player-minimizado.component.html',
  styleUrls: ['./player-minimizado.component.scss']
})
export class PlayerMinimizadoComponent implements OnInit {
  public favoritada: boolean = false;

  public tocando: boolean = false;

  public musicas: Array<Musica> = new Array<Musica>();
  public musicaKeyArray: number;

  constructor(private musicaService: MusicaService, private modalController: ModalController) {}

  ngOnInit() {
    this.buscarMusicas();
  }

  private buscarMusicas(): void {
    this.musicas = this.musicaService.buscar();
    this.musicaKeyArray = Math.round(Math.random() * (this.musicas.length - 1) + 0);
  }

  public favoritar(): void {
    this.favoritada = !this.favoritada;
  }

  public tocar(): void {
    this.tocando = !this.tocando;
  }

  public async maximizar(): Promise<any> {
    const modal = await this.modalController.create({
      component: SharedModalPage
    });
    return await modal.present();
  }
}
