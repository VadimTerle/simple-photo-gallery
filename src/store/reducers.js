import { combineReducers } from '@reduxjs/toolkit';

import photoGalleryReducer from '../screens/PhotoGallery/photoGallerySlice';
import photoDetailsReducer from '../screens/PhotoDetails/photoDetailsSlice';

export default combineReducers({
  photoGallery: photoGalleryReducer,
  photoDetails: photoDetailsReducer,
});
