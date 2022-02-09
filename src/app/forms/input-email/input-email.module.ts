import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputEmailComponent } from './input-email.component';

@NgModule({
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputEmailModule {}
