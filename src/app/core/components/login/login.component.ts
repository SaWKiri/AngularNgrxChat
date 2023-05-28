import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginPageService: LoginPageService){

  }


  onLoginClick() {
    debugger;
    this.loginPageService.login('username', 'password');
  }
}
