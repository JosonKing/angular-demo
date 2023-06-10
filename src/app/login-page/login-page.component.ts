import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  private tokenKey = 'token';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const userInfo = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm!.get('password')!.value
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem(this.tokenKey, String(Math.random()));
    this.router.navigate(['/']);
  }
}
