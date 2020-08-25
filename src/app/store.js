import { configureStore } from '@reduxjs/toolkit';
import heroCreator3eReducer from '../features/hero-creator-3e/heroCreator3eSlice';

export default configureStore({
  reducer: {
    heroCreator3e: heroCreator3eReducer
  }
});
