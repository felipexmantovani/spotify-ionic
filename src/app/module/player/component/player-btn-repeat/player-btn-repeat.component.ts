import { Component, Input, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-repeat',
  templateUrl: './player-btn-repeat.component.html',
  styleUrls: ['./player-btn-repeat.component.scss']
})
export class PlayerBtnRepeatComponent {
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
  @Input()
  public iconColor: string;

  public isActive: boolean = false;

  constructor(private playerService: PlayerService) {}

  public repeat(): void {}
}
