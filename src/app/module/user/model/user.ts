import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {
  id: number = null;
  name: string = null;
  lastName: string = null;
  fullName: string = null;
  email: string = null;
  password: string = null;
  photo: string = null;

  public createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [this.id],
      name: [this.name],
      lastName: [this.lastName],
      fullName: [this.fullName],
      email: [this.email, [Validators.required, Validators.email, Validators.minLength(3)]],
      password: [this.password, [Validators.required, Validators.minLength(8)]],
      photo: [this.photo]
    });
  }
}
