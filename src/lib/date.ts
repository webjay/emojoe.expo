const dayMS = 86400000;

// eslint-disable-next-line import/prefer-default-export
export function dayProgress(createdAt: string) {
  const dateActivity = new Date(createdAt);
  const dayStart = new Date(dateActivity);
  dayStart.setUTCHours(0, 0, 0, 0);
  const progressMS = dateActivity.getTime() - dayStart.getTime();
  return Math.round((progressMS / dayMS) * 100);
}
