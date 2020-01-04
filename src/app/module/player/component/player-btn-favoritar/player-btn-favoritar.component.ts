import { Component, Input, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-favoritar',
  templateUrl: './player-btn-favoritar.component.html',
  styleUrls: ['./player-btn-favoritar.component.scss']
})
export class PlayerBtnFavoritarComponent {
  @ViewChild('button', { static: false })
  public button: IonButton;
  @Input()
  public buttonSize: string;
  @Input()
  public buttonFill: string;
  @Input()
  public buttonColor: string;

  @ViewChild('icon', { static: false })
  public icon: IonIcon;
  @Input()
  public iconSize: string;

  public isFavoritada: boolean = false;

  constructor(private playerService: PlayerService) {}

  public favoritar(): void {
    this.isFavoritada = this.playerService.favoritar(this.isFavoritada);
  }
}
