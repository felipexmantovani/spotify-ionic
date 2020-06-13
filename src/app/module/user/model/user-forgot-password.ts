import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserForgotPassword {
  auth: string = null;

  public createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      auth: [this.auth, [Validators.required, Validators.minLength(3)]]
    });
  }
}
