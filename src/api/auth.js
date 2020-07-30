import { appClient } from './index';

export const AUTH = '/auth';

export const fetchToken = (apiKey) =>
  appClient.post(AUTH, JSON.stringify({ apiKey }));
