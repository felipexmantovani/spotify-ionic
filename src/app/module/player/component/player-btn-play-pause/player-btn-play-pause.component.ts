import { Component, Input, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-play-pause',
  templateUrl: './player-btn-play-pause.component.html',
  styleUrls: ['./player-btn-play-pause.component.scss']
})
export class PlayerBtnPlayPauseComponent {
  @ViewChild('button', { static: false })
  public button: IonButton;
  @Input()
  public buttonSize: string;
  @Input()
  public buttonFill: string;
  @Input()
  public buttonColor: string;
  @Input()
  public buttonPaddingX: boolean = true;

  @ViewChild('icon', { static: false })
  public icon: IonIcon;
  @Input()
  public iconSize: string;

  public isTocando: boolean = false;

  constructor(private playerService: PlayerService) {}

  public tocar(): void {
    this.isTocando = this.playerService.playPause(this.isTocando);
  }
}
