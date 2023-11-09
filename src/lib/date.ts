const dayMS = 24 * 60 * 60 * 1000;

const dayMonth = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
});

function dateToUTC(date: Date) {
  const utcDate = new Date(date);
  utcDate.setMinutes(utcDate.getMinutes() + utcDate.getTimezoneOffset());
  return utcDate;
}

export function dayProgressFlex(createdAt: string) {
  const date = dateToUTC(new Date(createdAt));
  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  const progressMS = date.getTime() - dayStart.getTime();
  return progressMS / dayMS;
}

export function hasDayGap(d1: string | Date, d2: string | Date) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return Math.abs(date1.getTime() - date2.getTime()) === dayMS;
}

function ISOStringToDateString(ISOString: string) {
  return ISOString.split('T')[0];
}

export function isSameDay(d1: Date, d2: Date) {
  return (
    ISOStringToDateString(d1.toISOString()) ===
    ISOStringToDateString(d2.toISOString())
  );
}

export function isToday(d: Date) {
  return isSameDay(new Date(), d);
}

export function isYesterday(date: Date) {
  const dateCompare = new Date();
  dateCompare.setUTCDate(dateCompare.getUTCDate() - 1);
  return isSameDay(dateCompare, new Date(date));
}

export function toDateString(dateString: string) {
  const date = new Date(dateString);
  return ISOStringToDateString(date.toISOString());
}

export function dayTitle(date: Date) {
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return dayMonth.format(dateToUTC(date));
}
