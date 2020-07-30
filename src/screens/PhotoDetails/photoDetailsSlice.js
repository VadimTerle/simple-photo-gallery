import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchImage } from '../../api/gallery';

export const initialState = {
  id: '',
  image: '',
  authorInfo: {
    name: '',
    camera: '',
  },
  tags: '',
  error: '',
};

export const getImageDetails = createAsyncThunk(
  'photoDetails/getInfo',
  async (id) => {
    const { data } = await fetchImage(id);

    return data;
  },
);

const photoDetails = createSlice({
  name: 'photoDetails',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [getImageDetails.fulfilled]: (state, action) => {
      const { full_picture, author, camera, tags } = action.payload;

      state.image = full_picture;
      state.authorInfo.name = author;
      state.authorInfo.camera = camera;
      state.tags = tags;
    },
    [getImageDetails.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setId } = photoDetails.actions;

export default photoDetails.reducer;
