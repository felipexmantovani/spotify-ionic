import { Component, Input, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-like',
  templateUrl: './player-btn-like.component.html',
  styleUrls: ['./player-btn-like.component.scss']
})
export class PlayerBtnLikeComponent {
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

  public isLiked: boolean = false;

  constructor(private playerService: PlayerService) {}

  public like(): void {
    this.isLiked = this.playerService.like(this.isLiked);
  }
}
