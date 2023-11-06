import React, { memo } from 'react';
import { Avatar } from 'react-native-paper';

function Dot() {
  return <Avatar.Text size={5} label="" />;
}

export default memo(Dot);
