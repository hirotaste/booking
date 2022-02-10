import { DayPeriod } from './../../../core/enum/day-period';
import { Schedule } from './../../../core/models/schedule';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IDateRangePickerOptions } from 'ngx-daterange';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/core/models/room';
import { ScheduleService } from 'src/app/core/services/schedule.service';
import { DayPeriodLabel } from '../../../core/enum/day-period';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  form: FormGroup;
  total: number = 0;
  room: Room = new Room;
  schedules: Schedule[] = [];
  dayPeriodLabel = DayPeriodLabel;
  list: {
    dateStr: string,
    date: Date,
    periods: {
      period: string,
      hours: {
        hour: number,
        selected: boolean
      }[]
    }[]
  }[] = [];

  options: IDateRangePickerOptions = {
    format: 'DD MMM',
    labelText: 'Dia(s) escolhido(s)',
    showResetButton: false,
    clickOutsideAllowed: false
  };

  constructor(
    private _builder: FormBuilder,
    private route: ActivatedRoute,
    private _rooms: RoomService,
    private _schedules: ScheduleService,
  ) {
    this.form = this._builder.group({
      dates: ['', Validators.required],
      period: ['Todos', Validators.required],
      types: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.loadRoom(id);
    this.loadSchedules(id);
  }

  async loadRoom(id: string) {
    this.room = await this._rooms.getRoom(id);
  }

  async loadSchedules(roomId: string) {
    this.schedules = await this._schedules.getSchedulesByRoom(roomId);
    this.schedules.forEach(s => {
      this.createDate(s);
    });
  }

  createDate(s: Schedule) {
    const idx = this.list.findIndex(l => l.dateStr === s.date);
    if (idx === -1) {
      const year = Number(s.date.substring(0, 4));
      const month = Number(s.date.substring(5, 7));
      const day = Number(s.date.substring(8, 10));
      const date = new Date(year, (month - 1), day);
      const item = {
        dateStr: s.date,
        date,
        periods: [
          {
            period: DayPeriod.MORNING,
            hours: []
          },
          {
            period: DayPeriod.EVENING,
            hours: []
          },
          {
            period: DayPeriod.NIGHT,
            hours: []
          },
        ]
      };
      this.list.push(item);
    }
    this.createHour(s);
  }

  createHour(s: Schedule) {
    const idx = this.list.findIndex(l => l.dateStr === s.date);
    const index = this.list[idx].periods.findIndex(p => p.period === s.period);
    const item = {
      hour: s.hour,
      selected: false
    }
    this.list[idx].periods[index].hours.push(item);
    this.list[0].periods
  }

  calcTotal() {
    this.total = 0;
    const res = this.list.forEach(l => {
      l.periods.forEach(p => {
         this.total += p.hours.filter(h => h.selected).length;
      })
    });
  }
}
