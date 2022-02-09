import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxMaskModule } from 'ngx-mask';

import { InputDateComponent } from './input-date.component';

@NgModule({
  declarations: [InputDateComponent],
  exports: [InputDateComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputDateModule {}
