import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IDateRangePickerOptions } from 'ngx-daterange';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  form: FormGroup;

  options: IDateRangePickerOptions = {
    format: 'DD MMM',
    labelText: 'Dia(s) escolhido(s)',
    showResetButton: false,
    clickOutsideAllowed: false
  };

  constructor(
    private _builder: FormBuilder
  ) {
    this.form = this._builder.group({
      dates: ['', Validators.required],
      period: ['Todos', Validators.required],
      types: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
