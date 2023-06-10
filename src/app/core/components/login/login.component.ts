import { Component } from '@angular/core';
import { LoginPageService } from './login-page.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    userName: new FormControl<string|null>('', Validators.required),
    password: new FormControl<string|null>('', Validators.required)
  })

  get userName(): FormControl<string|null> {
    return this.loginForm.controls.userName;
  }

  get password(): FormControl<string|null> {
    return this.loginForm.controls.password;
  }

  constructor(private loginPageService: LoginPageService){}


  onLoginSubmit() {
    this.loginPageService.login(this.loginForm.value);
  }
}
