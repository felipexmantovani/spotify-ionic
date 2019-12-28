import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.page.html',
  styleUrls: ['./shared-modal.page.scss']
})
export class SharedModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public fechar(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
