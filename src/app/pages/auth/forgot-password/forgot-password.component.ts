import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GenericValidator } from 'src/app/core/validators/generic-validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../authentication.scss'],
})
export class ForgotPasswordComponent {
  form: FormGroup;
  submitted = false;
  submitting = false;

  constructor(private builder: FormBuilder, private toastr: ToastrService) {
    this.form = this.builder.group({
      email: [null, [Validators.required, GenericValidator.EMAIL]]
    });
  }

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    this.toastr.success(`Uma nova senha foi enviada no seu email ${this.form.value.email}`);

    this.submitting = false;
  }
}
