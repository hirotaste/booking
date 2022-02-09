import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  path: string = 'rooms';

  constructor(private _http: HttpClient) {}

  getRooms() {
    return this._http.get<Room[]>(`${environment.apiUrl}/${this.path}`).toPromise();
  }

  getRoom(id: string) {
    return this._http.get<Room>(`${environment.apiUrl}/${this.path}/${id}`).toPromise();
  }

  getRoomByDate(date: string) {
    return this._http.get<Room[]>(`${environment.apiUrl}/${this.path}?date=${date}`).toPromise();
  }
}
