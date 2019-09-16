import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public showPassword: boolean;
  public showConfirmPassword: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.form.getRawValue());

    this.route.navigate(['home']);
  }

  registrar() {
    this.route.navigate(['signup']);
  }

  get f() {
    return this.form.controls;
  }
}
