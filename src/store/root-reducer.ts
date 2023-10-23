import {combineReducers} from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';

export const rootReducer = combineReducers({
  weather: weatherSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
