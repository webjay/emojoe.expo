import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

function HeaderButtonGroupCreate() {
  const { navigate } = useNavigation();
  return (
    <IconButton icon="plus" onPress={() => navigate('GroupEdit')} />
  );
}

function header() {
  return (
    <HeaderButtonGroupCreate />
  );
}

export default header;
