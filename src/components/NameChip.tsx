import React, { useMemo, useState, useEffect, memo } from 'react';
import { Chip, ActivityIndicator } from 'react-native-paper';
import { profileGetById } from '../lib/api';
import type { Profile } from '../types/api';
import { firstName } from '../lib/name';

type Props = {
  profileId: Profile['id'];
};

function NameChip({ profileId }: Props) {
  const [profile, setProfile] = useState<Profile>();
  const avatar = useMemo(
    () => (profile ? null : <ActivityIndicator />),
    [profile],
  );
  useEffect(() => {
    profileGetById(profileId).then(setProfile);
  }, [profileId]);
  return (
    <Chip avatar={avatar} mode="outlined" compact>
      {firstName(profile?.name)}
    </Chip>
  );
}

export default memo(NameChip);
