import { DayPeriod } from './../enum/day-period';

export class Schedule {
  id: number = 0;
  date: string = '';
  dateTime: Date = new Date;
  period: DayPeriod = DayPeriod.MORNING;
  hour: number = 0;
  roomId: number = 0;
}
