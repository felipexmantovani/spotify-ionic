import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { AUTENTICACAO_CONFIG } from '../../../autenticacao/autenticacao.config';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';
import { USUARIO_CONFIG } from '../../../usuario/usuario.config';

@Component({
  selector: 'app-sistema-inicio',
  templateUrl: './sistema-inicio.page.html',
  styleUrls: ['./sistema-inicio.page.scss']
})
export class SistemaInicioPage implements OnInit {
  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {}

  public goLogin(): void {
    this.router.navigateByUrl(AUTENTICACAO_CONFIG.pathFront);
  }

  public goFacebook(): void {
    this.loadingService.show('Entrando, espere...');
    setTimeout(() => {
      this.loadingService.hide();
      this.autenticacaoService.loginFake();
    }, 2000);
  }

  public criarConta(): void {
    this.router.navigateByUrl(`${USUARIO_CONFIG.pathFront}/novo`);
  }
}
