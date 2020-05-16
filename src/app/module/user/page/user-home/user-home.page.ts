import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { USER_CONFIG } from '../../user.config';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss']
})
export class UserHomePage implements OnInit {
  @ViewChild('slidesRecently', { static: false })
  public slidesRecently: IonSlides;

  public slidesRecentlyOpts: any;

  public playlists: Array<any>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.playlists = [
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'},
      {nome: 'Spotify Ionic'}
    ]
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
}
