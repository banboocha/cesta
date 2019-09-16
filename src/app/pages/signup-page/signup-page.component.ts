import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  public form: FormGroup;
  public showPassword: boolean;
  public showConfirmPassword: boolean;

  constructor(private fb: FormBuilder, private signupService: SignupService, private route: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  signup() {
    this.signupService.register(this.form.getRawValue());
  }

  logar() {
    this.route.navigate(['login']);
  }

  get f() {
    return this.form.controls;
  }
}
