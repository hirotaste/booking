import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { InputSelectComponent } from './input-select.component';

@NgModule({
  declarations: [InputSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule, FormsModule],
  exports: [InputSelectComponent]
})
export class InputSelectModule {}
