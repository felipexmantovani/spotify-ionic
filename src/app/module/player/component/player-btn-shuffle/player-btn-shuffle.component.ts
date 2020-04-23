import { Component, Input, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-btn-shuffle',
  templateUrl: './player-btn-shuffle.component.html',
  styleUrls: ['./player-btn-shuffle.component.scss']
})
export class PlayerBtnShuffleComponent {
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

  public player: Player = new Player();

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayer();
    
    this.subs.push(
      this.playerService.playerBS.subscribe((player) => {
        player ? (this.player = player) : null;
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

  public shuffle(): void {
    this.playerService.shuffle();
  }
}
