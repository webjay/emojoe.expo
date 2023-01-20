const dayMS = 86400000;

const dayMonth = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export function dayProgress(createdAt: string) {
  const dateActivity = new Date(createdAt);
  const dayStart = new Date(dateActivity);
  dayStart.setUTCHours(0, 0, 0, 0);
  const progressMS = dateActivity.getTime() - dayStart.getTime();
  return Math.round((progressMS / dayMS) * 100);
}

function isSameDay(d1: Date, d2: Date) {
  return d1.toDateString() === d2.toDateString();
}

function isToday(d: Date) {
  return isSameDay(new Date(), d);
}

export function toDateString(dateString: string) {
  const date = new Date(dateString);
  return date.toDateString();
}

export function dayTitle(d: Date) {
  if (isToday(d) === true) return 'Today';
  return dayMonth.format(d);
}
