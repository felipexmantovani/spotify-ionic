import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss']
})
export class PlayerModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public minimizar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
