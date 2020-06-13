import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AUTH_CONFIG } from '../../../auth/auth.config';
import { UserForgotPassword } from '../../model/user-forgot-password';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.page.html',
  styleUrls: ['./user-forgot-password.page.scss']
})
export class UserForgotPasswordPage implements OnInit {
  private pageName: string = 'Esqueceu sua senha?';

  private forgotPassword: UserForgotPassword = new UserForgotPassword();
  public forgotPasswordForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public getPageName(): string {
    return this.pageName;
  }

  private createForm(): void {
    this.forgotPassword = new UserForgotPassword();
    this.forgotPasswordForm = this.forgotPassword.createForm(this.formBuilder);
  }

  public onSubmit(): void {
    this.forgotPassword = this.forgotPasswordForm.value;
    this.navController.navigateBack(AUTH_CONFIG.pathFront);
  }
}
