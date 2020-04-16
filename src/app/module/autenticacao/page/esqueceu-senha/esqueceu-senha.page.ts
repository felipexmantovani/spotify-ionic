import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AUTENTICACAO_CONFIG } from '../../autenticacao.config';
import { EsqueceuSenha } from '../../model/esqueceu-senha';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss']
})
export class EsqueceuSenhaPage implements OnInit {
  private nomePagina: string = 'Esqueceu sua senha?';

  private esqueceuSenha: EsqueceuSenha = new EsqueceuSenha();
  public esqueceuSenhaForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.criarForm();
  }

  public getNomePagina(): string {
    return this.nomePagina;
  }

  private criarForm(): void {
    this.esqueceuSenha = new EsqueceuSenha();
    this.esqueceuSenhaForm = this.esqueceuSenha.criarForm(this.formBuilder);
  }

  public onSubmit(): void {
    this.esqueceuSenha = this.esqueceuSenhaForm.value;
    this.navController.navigateBack(AUTENTICACAO_CONFIG.pathFront);
  }
}
