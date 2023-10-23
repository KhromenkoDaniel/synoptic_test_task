import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {apiKey} from '../utils/constants';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchData',
  async (city: string) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`,
    );
    return response.data;
  },
);
