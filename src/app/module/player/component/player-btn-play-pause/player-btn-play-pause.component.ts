import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-play-pause',
  templateUrl: './player-btn-play-pause.component.html',
  styleUrls: ['./player-btn-play-pause.component.scss']
})
export class PlayerBtnPlayPauseComponent implements OnInit, OnDestroy {
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

  @Input()
  public isInModal: boolean = false;

  public player: Player = new Player();

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayer();
    
    this.subs.push(
      this.playerService.playerBS.subscribe((player) => {
        player ? this.player = player : null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub ? sub.unsubscribe : null;
    });
  }

  private async getPlayer() {
    this.player = await this.playerService.getStorage();
  }

  public playPause(): void {
    this.playerService.playPause();
  }
}
