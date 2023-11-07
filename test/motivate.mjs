import { strictEqual } from 'node:assert';
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/extensions */
import calcGroupStreak from '../amplify/backend/function/emojoeMotivationNotification/src/handle-data.mjs';

function daysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

describe('test', () => {
  it('streak 1', () => {
    const groupStreak = calcGroupStreak([{ createdAt: daysAgo(1) }]);
    strictEqual(groupStreak, 1);
  });
  it('streak 2', () => {
    const groupStreak = calcGroupStreak([
      { createdAt: daysAgo(1) },
      { createdAt: daysAgo(2) },
    ]);
    strictEqual(groupStreak, 2);
  });
  it('streak 2', () => {
    const groupStreak = calcGroupStreak([
      { createdAt: daysAgo(1) },
      { createdAt: daysAgo(2) },
      { createdAt: daysAgo(4) },
      { createdAt: daysAgo(5) },
    ]);
    strictEqual(groupStreak, 2);
  });
  it('streak 4', () => {
    const groupStreak = calcGroupStreak([
      { createdAt: daysAgo(1) },
      { createdAt: daysAgo(2) },
      { createdAt: daysAgo(3) },
      { createdAt: daysAgo(4) },
    ]);
    strictEqual(groupStreak, 4);
  });
  it('no streak', () => {
    const groupStreak = calcGroupStreak([]);
    strictEqual(groupStreak, null);
  });
  it('no streak', () => {
    const groupStreak = calcGroupStreak([{ createdAt: daysAgo(0) }]);
    strictEqual(groupStreak, null);
  });
  it('streakRepair', () => {
    const groupStreak = calcGroupStreak([
      { createdAt: daysAgo(1), streakRepair: true },
    ]);
    strictEqual(groupStreak, null);
  });
  it('make streak repair', () => {
    if (new Date().getUTCHours() !== 23) return;
    const groupStreak = calcGroupStreak([{ createdAt: daysAgo(0) }]);
    strictEqual(groupStreak, -1);
  });
});
