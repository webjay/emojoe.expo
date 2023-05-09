import { useState, useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import type { Activity } from '@src/types/api';
import { getActivitiesByGroupMembershipId } from '@src/lib/api';
import { hasDayGap, isSameDay, isYesterday, isToday } from '@src/lib/date';

function countStreak(activities: Activity[]) {
  const streakActivities: Activity[] = [];
  activities.some((activity, index) => {
    const activityDate = new Date(activity.createdAt);
    if (index === 0) {
      if (isToday(activityDate) || isYesterday(activityDate)) {
        streakActivities.push(activity);
        return false;
      }
      return true;
    }
    const previousActivity = streakActivities[streakActivities.length - 1];
    const previousActivityDate = new Date(previousActivity.createdAt);
    if (isSameDay(previousActivityDate, activityDate)) {
      return false;
    }
    if (hasDayGap(previousActivityDate, activityDate)) {
      streakActivities.push(activity);
      return false;
    }
    return true;
  });
  return streakActivities.length;
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
  const getData = useCallback(() => {
    getActivitiesByGroupMembershipId(id).then(countStreak).then(setStreak);
  }, [id]);
  useFocusEffect(useCallback(getData, [getData]));
  return { streak, streakProgress, streakIcon };
}
