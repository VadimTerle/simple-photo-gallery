import { appClient } from './index';

const IMAGES = '/images';

export const fetchImages = (page) =>
  appClient.get(IMAGES, { params: { page } });

export const fetchImage = (id) => appClient.get(`${IMAGES}/${id}`);
