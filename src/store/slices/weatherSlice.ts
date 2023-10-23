import {createSlice} from '@reduxjs/toolkit';
import {fetchWeatherData} from '../../actions/weather';

import {TWeatherState} from '../../types';

const initialState: TWeatherState = {
  data: null,
  loading: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeatherData.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
