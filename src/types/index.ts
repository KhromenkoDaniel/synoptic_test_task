export type TWeatherState = {
  data: any;
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null | undefined;
};

export type TWeatherImages = {
  [key: string]: number;
};
