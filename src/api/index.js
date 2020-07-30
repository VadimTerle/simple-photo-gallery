import axios from 'axios';

// API Calls
import { fetchToken, AUTH } from './auth';

// Utils
import { getAccessToken, setAccessToken } from '../utils/tokens';

export const API_KEY = '23567b218376f79d9415';

export const appClient = axios.create({
  baseURL: 'http://interview.agileengine.com',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

const errorHandler = async (res) => {
  if (res.response) {
    const {
      data: { message },
    } = res.response;

    throw new Error(message);
  }
};

appClient.interceptors.request.use(async (request) => {
  const updatedRequest = { ...request };

  if (!updatedRequest.url.includes(AUTH)) {
    let accessToken = await getAccessToken();

    if (!accessToken) {
      const {
        data: { token },
      } = await fetchToken(API_KEY);

      await setAccessToken(token);

      accessToken = token;
    }

    updatedRequest.headers.Authorization = accessToken;
  }
  return updatedRequest;
});

appClient.interceptors.response.use((response) => response, errorHandler);
