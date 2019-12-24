import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';
import { AutenticacaoUtil } from '../../../autenticacao/util/autenticacao-util';
import { UsuarioUtil } from '../../../usuario/util/usuario-util';

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
    this.router.navigateByUrl(AutenticacaoUtil.SETUP.path.front);
  }

  public goFacebook(): void {
    this.loadingService.show('Entrando, espere...');
    setTimeout(() => {
      this.loadingService.hide();
      this.autenticacaoService.loginFake();
    }, 2000);
  }

  public criarConta(): void {
    this.router.navigateByUrl(`${UsuarioUtil.SETUP.path.front}/novo`);
  }
}
