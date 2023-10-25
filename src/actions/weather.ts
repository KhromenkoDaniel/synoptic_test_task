import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {apiKey} from '../utils/constants';
import {TFetchWeatherData} from '../types';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchData',
  async ({city, selectedAmountOfDays}: TFetchWeatherData) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${selectedAmountOfDays}`,
    );
    return response.data;
  },
);
