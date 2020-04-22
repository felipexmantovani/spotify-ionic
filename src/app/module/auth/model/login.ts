import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Login {
  auth: string = null;
  password: string = null;

  public criarForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      auth: [this.auth, [Validators.required, Validators.minLength(3)]],
      password: [this.password, [Validators.required, Validators.minLength(3)]]
    });
  }
}
