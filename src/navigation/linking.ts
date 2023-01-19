import { createURL } from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import type { StackNavigatorParamList } from '../types/navigation';

const prefix = createURL('/');

const linking: LinkingOptions<StackNavigatorParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      GroupJoin: 'group/join/:groupId',
    },
  },
};

export default linking;
