import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Musica } from '../../../musica/model/musica';
import { MusicaService } from '../../../musica/service/musica.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-minimizado',
  templateUrl: './player-minimizado.component.html',
  styleUrls: ['./player-minimizado.component.scss']
})
export class PlayerMinimizadoComponent implements OnInit {
  @ViewChild(IonSlides, { static: false })
  public slides: IonSlides;
  public slideOpts: Object;
  public mostrarSlide: boolean = false;

  public musica: Musica;
  public musicas: Array<Musica>;

  constructor(private musicaService: MusicaService, private playerService: PlayerService) {}

  ngOnInit() {
    this.getSongs();
  }

  private async getSongs() {
    this.musicas = await this.musicaService.getAll();
  }

  public async initSlide() {
    this.musica = await this.musicaService.getRandom();
    this.slideOpts = {
      initialSlide: 0,
      speed: 100
    };
    this.slides.slideTo(this.musica.id);
    this.mostrarSlide = true;
  }

  public modal(musica: Musica): void {
    this.playerService.modal(musica, this.musicas);
  }
}
