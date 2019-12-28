import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Musica } from '../../model/musica';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss']
})
export class PlayerModalPage implements OnInit {
  public musica: Musica;
  public musicas: Array<Musica>;

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    this.musica = this.navParams.get('musica');
    this.musicas = this.navParams.get('musicas');
  }

  public fechar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
