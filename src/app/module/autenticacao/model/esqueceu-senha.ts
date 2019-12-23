import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class EsqueceuSenha {
  autenticacao: string = null;

  public criarForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      autenticacao: [this.autenticacao, [Validators.required, Validators.minLength(3)]]
    });
  }
}