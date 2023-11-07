import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    this.router.navigateByUrl('/profile');
  }
}
