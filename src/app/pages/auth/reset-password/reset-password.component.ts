import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericValidator } from 'src/app/core/validators/generic-validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../authentication.scss']
})
export class ResetPasswordComponent {
  form: FormGroup;
  submitting = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    this.form = this.builder.group({
      email: [{ value: null, disabled: true }, [Validators.required, GenericValidator.EMAIL]],
      newPassword: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    this.toastr.success('Senha alterada com sucesso');

    this.submitting = false;
  }
}
