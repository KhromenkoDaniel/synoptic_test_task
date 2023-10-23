import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    immutableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
