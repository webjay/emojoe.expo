import AsyncStorage from '@react-native-async-storage/async-storage';

export function storageGet(key: string) {
  return AsyncStorage.getItem(key);
}

export function storageSet(key: string, value: string) {
  return AsyncStorage.setItem(key, value);
}

export function storageRemove(key: string) {
  return AsyncStorage.removeItem(key);
}
