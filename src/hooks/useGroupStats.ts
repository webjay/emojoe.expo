import { useState, useMemo, useEffect } from 'react';
import type { Activity } from '@src/types/api';
import { getActivitiesByGroupMembershipId } from '@src/lib/api';

const streakPeriodMS = 48 * 60 * 60 * 1000;

function isNotWithinStreak(
  createdAt1: Activity['createdAt'],
  createdAt2: Activity['createdAt'],
) {
  const timeDiff =
    new Date(createdAt1).getTime() - new Date(createdAt2).getTime();
  return timeDiff > streakPeriodMS;
}

function countStreak(activities: Activity[]) {
  if (activities.length === 0) return 0;
  if (isNotWithinStreak(new Date().toISOString(), activities[0].createdAt)) {
    return 0;
  }
  const activityStreakStopIndex = activities.findIndex(
    (activity, index, array) => {
      if (!activity || !activity.createdAt) return true;
      const previousActivity = array[index + 1];
      if (!previousActivity) return true;
      if (index === 0) {
        return isNotWithinStreak(new Date().toISOString(), activity.createdAt);
      }
      return isNotWithinStreak(activity.createdAt, previousActivity.createdAt);
    },
  );
  if (activityStreakStopIndex === -1) return activities.length;
  if (activities.length === 1) return activityStreakStopIndex;
  return activityStreakStopIndex + 1;
}

export default function useGroupStats(
  id: Activity['groupMembershipActivitiesId'],
) {
  const [streak, setStreak] = useState<number>(0);
  const streakProgress = useMemo(() => streak / 7, [streak]);
  const streakIcon = useMemo(
    () => (streak ? 'rocket-launch' : 'tortoise'),
    [streak],
  );
  useEffect(() => {
    getActivitiesByGroupMembershipId(id).then(countStreak).then(setStreak);
  }, [id]);
  return { streak, streakProgress, streakIcon };
}
