import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputEmailComponent,
      multi: true
    }
  ]
})
export class InputEmailComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';

  id = this.label + Math.random() * 1000;

  constructor(injector: Injector) {
    super(injector);
  }
}
