import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  confirm_password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  registerForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
  });

  ngOnInit(): void {
    this.registerForm.addValidators(
      this.comparePasswordValidator(this.confirm_password, this.password)
    );
  }

  comparePasswordValidator(
    baseControl: FormControl,
    compareControl: FormControl
  ): ValidatorFn {
    return (): ValidationErrors | null => {
      const controlValue = baseControl.value;
      const compareControlValue = compareControl.value;
      if (controlValue !== compareControlValue) {
        const error = { samePassword: true };
        baseControl.setErrors(error);
        return error;
      }
      baseControl.setErrors(null);
      return null;
    };
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
