const dayMS = 86400000;

const dayMonth = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
});

export function dayProgressFlex(createdAt: string) {
  const date = new Date(createdAt);
  const dayStart = new Date(date);
  dayStart.setUTCHours(0, 0, 0, 0);
  const progressMS = date.getTime() - dayStart.getTime();
  return progressMS / dayMS;
}

function isSameDay(d1: Date, d2: Date) {
  return d1.toDateString() === d2.toDateString();
}

function isToday(d: Date) {
  return isSameDay(new Date(), d);
}

function isYesterday(d: Date) {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return isSameDay(date, d);
}

export function toDateString(dateString: string) {
  const date = new Date(dateString);
  return date.toDateString();
}

export function dayTitle(d: Date) {
  if (isToday(d)) return 'Today';
  if (isYesterday(d)) return 'Yesterday';
  return dayMonth.format(d);
}
