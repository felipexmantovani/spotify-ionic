import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Login {
  login: string = null;
  senha: string = null;

  public criarForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      login: [this.login, [Validators.required, Validators.minLength(3)]],
      senha: [this.senha, [Validators.required, Validators.minLength(3)]]
    });
  }
}
