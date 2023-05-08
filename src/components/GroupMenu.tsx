import React, { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { IconButton, Menu } from 'react-native-paper';

type Props = {
  size: number;
  groupId: string;
};

export default function GroupMenu({ size, groupId }: Props) {
  const { push: navigate } = useRouter();
  const [visible, setVisible] = React.useState(false);
  const menuOpen = useCallback(() => setVisible(true), []);
  const menuClose = useCallback(() => setVisible(false), []);
  const onPressActivity = useCallback(() => {
    menuClose();
    navigate(`/group/${groupId}`);
  }, [groupId, menuClose, navigate]);
  const onPressInvite = useCallback(() => {
    menuClose();
    navigate(`/group/${groupId}/invite`);
  }, [groupId, menuClose, navigate]);
  const onPressLeave = useCallback(() => {
    menuClose();
    navigate(`/group/${groupId}/leave`);
  }, [groupId, menuClose, navigate]);
  return (
    <Menu
      visible={visible}
      onDismiss={menuClose}
      anchor={
        <IconButton icon="dots-horizontal" size={size} onPress={menuOpen} />
      }
    >
      <Menu.Item
        leadingIcon="gesture-swipe-horizontal"
        onPress={onPressActivity}
        title="Activity"
      />
      <Menu.Item
        leadingIcon="account-plus"
        onPress={onPressInvite}
        title="Invite"
      />
      <Menu.Item
        leadingIcon="exit-to-app"
        onPress={onPressLeave}
        title="Leave"
      />
    </Menu>
  );
}
