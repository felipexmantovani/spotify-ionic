import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Usuario {
  id: number = null;
  nome: string = null;
  sobrenome: string = null;
  nomeCompleto: string = null;
  email: string = null;
  senha: string = null;
  foto: string = null;

  public createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [this.id],
      nome: [this.nome],
      sobrenome: [this.sobrenome],
      email: [this.email, [Validators.required, Validators.email, Validators.minLength(3)]],
      senha: [this.senha, [Validators.required, Validators.minLength(8)]],
      foto: [this.foto]
    });
  }
}
