import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDateRangePickerOptions } from 'ngx-daterange';
import { Room } from 'src/app/core/models/room';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  form: FormGroup;
  dateMin = new Date;
  dateMax = new Date(2030, 11, 30);

  list: Room[] = [];

  options: IDateRangePickerOptions = {
    format: 'DD MMM',
    labelText: 'Dia(s) escolhido(s)',
    showResetButton: false,
    clickOutsideAllowed: false
  };

  constructor(
    private _builder: FormBuilder,
    private _rooms: RoomService,
    private router: Router
  ) {
    this.form = this._builder.group({
      dates: ['', Validators.required],
      period: ['Todos', Validators.required],
      types: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.list = await this._rooms.getRooms();
  }

  handleBooking(id: number) {
    this.router.navigate([`rooms/${id}`])
  }
}
