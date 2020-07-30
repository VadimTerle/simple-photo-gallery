import AsyncStorage from '@react-native-community/async-storage';

export async function getAccessToken() {
  const token = await AsyncStorage.getItem('accessToken');

  return token ? `Bearer ${token}` : undefined;
}

export async function setAccessToken(accessToken) {
  await AsyncStorage.setItem('accessToken', accessToken);
}
