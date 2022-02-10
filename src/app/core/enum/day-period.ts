export enum DayPeriod {
  MORNING = 'morning',
  EVENING = 'evening',
  NIGHT = 'night',
}

export const DayPeriodLabel = new Map<string, string>([
  ['morning', 'Manhã'],
  ['evening', 'Tarde'],
  ['night', 'Noite']
]);

export const DayPeriodOptions = Array.from(DayPeriodLabel).map(dayPeriod => ({
  id: dayPeriod[0],
  label: dayPeriod[1]
}));
