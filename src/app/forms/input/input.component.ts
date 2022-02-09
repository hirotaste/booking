import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

type InputType = 'color' | 'date' | 'datetime-local' | 'month' | 'number' | 'text' | 'time' | 'url' | 'week' | 'email';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: InputType = 'text';
  @Input() maxlength: number = 10;

  id = this.label + Math.random() * 1000;

  constructor(injector: Injector) {
    super(injector);
  }
}
