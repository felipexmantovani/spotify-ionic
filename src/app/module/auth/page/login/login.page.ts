import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { USER_CONFIG } from '../../../user/user.config';
import { Login } from '../../model/login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private login: Login = new Login();
  public loginForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.login = new Login();
    this.loginForm = this.login.createForm(this.formBuilder);
  }

  public onSubmit(): void {
    this.loadingService.show('Entrando, espere...');
    this.login = this.loginForm.value;
    setTimeout(() => {
      this.loadingService.hide();
      this.authService.login(this.login);
    }, 2000);
  }

  public goForgotPassword() {
    this.router.navigateByUrl(`${USER_CONFIG.pathFront}/forgot-password`);
  }
}
