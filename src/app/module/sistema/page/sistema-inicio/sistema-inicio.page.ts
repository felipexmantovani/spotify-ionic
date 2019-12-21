import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoUtil } from '../../../autenticacao/util/autenticacao-util';

@Component({
  selector: 'app-sistema-inicio',
  templateUrl: './sistema-inicio.page.html',
  styleUrls: ['./sistema-inicio.page.scss']
})
export class SistemaInicioPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public goLogin(): void {
    this.router.navigateByUrl(AutenticacaoUtil.SETUP.path.front);
  }
}
