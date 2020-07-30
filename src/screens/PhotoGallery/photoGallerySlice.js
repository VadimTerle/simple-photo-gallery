import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchImages } from '../../api/gallery';

export const initialState = {
  images: [],
  page: 1,
  hasMore: false,
  error: '',
};

export const getImages = createAsyncThunk(
  'photoGallery/getImages',
  async (page) => {
    const { data } = await fetchImages(page);
    return data;
  },
);

const photoGallery = createSlice({
  name: 'photoGallery',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [getImages.fulfilled]: (state, action) => {
      const { pictures, hasMore } = action.payload;

      state.images = [...state.images, ...pictures];
      state.hasMore = hasMore;
    },
    [getImages.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPage, refreshToken } = photoGallery.actions;

export default photoGallery.reducer;
