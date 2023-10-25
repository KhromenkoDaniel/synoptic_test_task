import {createSlice} from '@reduxjs/toolkit';
import {fetchWeatherData} from '../../actions/weather';

import {TWeatherState} from '../../types';

const initialState: TWeatherState = {
  data: null,
  loading: 'idle',
  error: null,
  selectedAmountOfDays: '1',
  themeIsLight: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSelectedAmountOfDays: (state, action) => {
      state.selectedAmountOfDays = action.payload;
    },
    setThemeIsLight: (state, action) => {
      state.themeIsLight = action.payload;
    },
  },
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

export const {setSelectedAmountOfDays, setThemeIsLight} = weatherSlice.actions;

export default weatherSlice.reducer;
