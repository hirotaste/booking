import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputEmailModule } from 'src/app/forms/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/forms/input-password/input-password.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InputModule } from 'src/app/forms/input/input.module';
import { ErrorTailorModule } from '@ngneat/error-tailor';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    InputModule,
    CommonModule,
    InputEmailModule,
    ErrorTailorModule,
    ReactiveFormsModule,
    InputPasswordModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {}
