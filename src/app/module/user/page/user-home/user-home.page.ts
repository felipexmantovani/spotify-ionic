import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { Player } from '../../../player/model/player';
import { PlayerService } from '../../../player/service/player.service';
import { USER_CONFIG } from '../../user.config';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss']
})
export class UserHomePage implements OnInit, OnDestroy {
  @ViewChild('slidesRecently', { static: false })
  public slidesRecently: IonSlides;

  public slidesRecentlyOpts: any;

  public playlists: Array<any>;

  public player: Player;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playlists = [
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'}
    ]

    this.getPlayer();
    
    this.subs.push(
      this.playerService.playerBS.subscribe(player => {
        player ? this.player = player : null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub ? sub.unsubscribe : null;
    });
  }

  public goConfiguration(): void {
    this.router.navigateByUrl(`${TABS_CONFIG.pathFront}${USER_CONFIG.pathFront}/configuration`);
  }

  public initSlide(): void {
    this.slidesRecentlyOpts = {
      freeMode: true,
      speed: 100,
      slidesPerView: 2.8,
      spaceBetween: 16
    };
  }

  private async getPlayer() {
    this.player = await this.playerService.getStorage();
  }
}
