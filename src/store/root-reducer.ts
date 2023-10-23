import {combineReducers} from '@reduxjs/toolkit';
import paginationSlice from './slices/paginationSlice';

export const rootReducer = combineReducers({
  pagination: paginationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
