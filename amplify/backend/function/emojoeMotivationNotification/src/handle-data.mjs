const MilliSecondsPerHour = 60 * 60 * 1000;
const MilliSecondsPerDay = 24 * MilliSecondsPerHour;

function dateResetTime(date) {
  const dateReset = new Date(date);
  dateReset.setHours(0, 0, 0, 0);
  return dateReset;
}

function calcStreakLength(date1, date2) {
  return (dateResetTime(date1) - dateResetTime(date2)) / MilliSecondsPerDay;
}

function streakDays(groupActivity, streakEndIndex) {
  return (
    calcStreakLength(
      groupActivity[0].createdAt,
      groupActivity[streakEndIndex].createdAt,
    ) + 1
  );
}

function areDatesWithinOneDay(date1, date2) {
  return calcStreakLength(date1, date2) <= 1;
}

function isLatestActivityStreakRepair(activities) {
  return activities
    .slice(0, 2)
    .every(({ streakRepair }) => Boolean(streakRepair));
}

function isLatestActivityYesterday([{ createdAt }]) {
  return calcStreakLength(new Date(), createdAt) === 1;
}

function isLatestActivityAtThisHour([{ createdAt }]) {
  const date1 = new Date();
  const date2 = new Date(createdAt);
  return date1.getHours() === date2.getHours();
}

function isAtDayEnd() {
  return new Date().getUTCHours() === 23;
}

export default function calcGroupStreak(groupActivity) {
  if (
    groupActivity.length === 0 ||
    isLatestActivityStreakRepair(groupActivity) ||
    !isLatestActivityYesterday(groupActivity)
  ) {
    return null;
  }
  if (isAtDayEnd()) {
    return -1;
  }
  if (!isLatestActivityAtThisHour(groupActivity)) return null;
  const streakGapIndex = groupActivity.findIndex(({ createdAt }, index) => {
    if (index + 1 === groupActivity.length) return false;
    return !areDatesWithinOneDay(createdAt, groupActivity[index + 1].createdAt);
  });
  const streakEndIndex =
    streakGapIndex === -1 ? groupActivity.length - 1 : streakGapIndex;
  const streakLength = streakDays(groupActivity, streakEndIndex);
  return streakLength;
}
