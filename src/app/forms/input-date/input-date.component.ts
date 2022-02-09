import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { isValid as dateIsValid, parse as dateParse } from 'date-fns';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { distinctUntilChanged, filter } from 'rxjs/operators';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDateComponent,
      multi: true
    }
  ]
})
export class InputDateComponent extends ControlValueAccessorConnectorComponent implements OnInit, AfterViewInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() min: Date = new Date;
  @Input() max: Date = new Date;
  @Input() minNow: boolean = false;
  @Input() maxNow: boolean = false;

  id = 'n8a4nb86aw486n4ARTabsdfASDF';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.control.setValidators((control: AbstractControl): Validators => {
      const result = dateIsValid(dateParse(control.value, 'dd/MM/yyyy', new Date()));
      if (result) {
        return false;
      }

      return { date: true };
    });
  }

  ngAfterViewInit(): void {
    if (this.minNow) {
      this.min = new Date();
    }

    if (this.maxNow) {
      this.max = new Date();
    }

    const DATE_FORMAT = 'd/m/Y';

    const datePicker = flatpickr(`#${this.id}`, {
      locale: Portuguese,
      minDate: this.min,
      maxDate: this.max,
      dateFormat: DATE_FORMAT,
      allowInput: true,
      altFormat: DATE_FORMAT,
      altInput: false,
      disableMobile: true
    }) as flatpickr.Instance;

    this.control.valueChanges
      .pipe(
        filter(term => !!term),
        distinctUntilChanged()
      )
      .subscribe(value => {
        const parsedDate: any = datePicker.parseDate(value, DATE_FORMAT);
        const formattedDate = datePicker.formatDate(parsedDate, DATE_FORMAT);
        if (datePicker && value === formattedDate) {
          datePicker.setDate(parsedDate, true, DATE_FORMAT);
        }
      });
  }
}
