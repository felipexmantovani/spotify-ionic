import { Component, Input, OnInit } from '@angular/core';
import { Musica } from '../../model/musica';
import { MusicaService } from '../../service/musica.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input()
  public isMinimizado: boolean = true;

  public favoritada: boolean = false;

  public tocando: boolean = false;

  public musicas: Array<Musica> = new Array<Musica>();
  public musicaKeyArray: number;

  constructor(private musicaService: MusicaService) {}

  ngOnInit() {
    this.buscarMusicas();
  }

  public favoritar(): void {
    this.favoritada = !this.favoritada;
  }

  public tocar(): void {
    this.tocando = !this.tocando;
  }

  private buscarMusicas(): void {
    this.musicas = this.musicaService.buscar();
    this.musicaKeyArray = Math.round(Math.random() * (this.musicas.length - 1) + 0);
  }
}
