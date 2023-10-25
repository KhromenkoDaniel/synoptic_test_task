export type TWeatherState = {
  data: any;
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null | undefined;
  selectedAmountOfDays: string;
};

export type TWeatherData = {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        condition: {
          text: string;
        };
      };
    }[];
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
    // Add more properties as needed
  };
};

export type TWeatherImages = {
  [key: string]: number;
};

export type TCustomDropdown = {
  value: string | null;
  setValue: (value: string) => void;
  currentCity: string | null;
};

export type TNextDaysWeatherList = {
  weather: TWeatherData;
};

export type TDateTimeFormatOptions = {
  weekday: 'long' | 'short' | 'narrow';
};

export type TFetchWeatherData = {
  city: string | null;
  selectedAmountOfDays: string;
};

export type TNextDaysWeatherItem = {
  item: {
    day: {
      avgtemp_c: number;
      condition: {
        text: string;
      };
    };
  };
  dayName: string;
};

export type TWeatherStat = {
  iconSource: number;
  value: number | undefined;
  label: string;
};
