import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  path: string = 'schedules';

  constructor(private _http: HttpClient) {}

  getSchedules() {
    return this._http.get<Schedule[]>(`${environment.apiUrl}/${this.path}`).toPromise();
  }

  getSchedulesByRoom(roomId: string) {
    return this._http.get<Schedule[]>(`${environment.apiUrl}/${this.path}?roomId=${roomId}`).toPromise();
  }

  getSchedule(id: string) {
    return this._http.get<Schedule>(`${environment.apiUrl}/${this.path}/${id}`).toPromise();
  }

  getScheduleByDate(date: string) {
    return this._http.get<Schedule[]>(`${environment.apiUrl}/${this.path}?date=${date}`).toPromise();
  }

  getScheduleByPeriod(period: string) {
    return this._http.get<Schedule[]>(`${environment.apiUrl}/${this.path}?period=${period}`).toPromise();
  }

  getScheduleByDatePeriod(date: string, period: string) {
    return this._http.get<Schedule[]>(`${environment.apiUrl}/${this.path}?date=${date}&period=${period}`).toPromise();
  }
}
