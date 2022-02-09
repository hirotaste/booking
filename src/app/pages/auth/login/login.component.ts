import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthContext } from 'src/app/core/contexts/AuthContext';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private useAuth: AuthContext
  ) {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // fazer login

    this.loading = false;
  }
}
