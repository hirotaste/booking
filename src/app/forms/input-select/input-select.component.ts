import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true
    }
  ]
})
export class InputSelectComponent extends ControlValueAccessorConnectorComponent {
  @Input() items: any[] = [];
  @Input() label: string = '';
  @Input() bindLabel: string = '';
  @Input() bindValue: string = '';
  @Input() notFoundText: string = 'Não foi possível carregar os itens da lista';
  @Input() placeholder: string = '';
  @Input() clearable: boolean = false;
  @Input() multiple: boolean = false;

  id = this.label + Math.random() * 1000;

  constructor(injector: Injector) {
    super(injector);
  }
}
