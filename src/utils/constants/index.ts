import {TWeatherImages} from '../../types';

export const apiKey = '577a81f3cedd4e18b5f85018232010';
export const opencageApiKey = 'c7066b802bc0469ca4bfba54feb71d83';

export const weatherImages: TWeatherImages = {
  'Partly cloudy': require('../../../assets/images/partlycloudy.png'),
  'Moderate rain': require('../../../assets/images/moderaterain.png'),
  'Patchy rain possible': require('../../../assets/images/moderaterain.png'),
  Sunny: require('../../../assets/images/sun.png'),
  Clear: require('../../../assets/images/sun.png'),
  Overcast: require('../../../assets/images/cloud.png'),
  Cloudy: require('../../../assets/images/cloud.png'),
  'Light rain': require('../../../assets/images/moderaterain.png'),
  'Moderate rain at times': require('../../../assets/images/moderaterain.png'),
  'Heavy rain': require('../../../assets/images/heavyrain.png'),
  'Heavy rain at times': require('../../../assets/images/heavyrain.png'),
  'Moderate or heavy freezing rain': require('../../../assets/images/heavyrain.png'),
  'Moderate or heavy rain shower': require('../../../assets/images/heavyrain.png'),
  'Moderate or heavy rain with thunder': require('../../../assets/images/heavyrain.png'),
  Mist: require('../../../assets/images/mist.png'),
  Other: require('../../../assets/images/moderaterain.png'),
};

export const daysData = [
  {label: 'Today', value: '1'},
  {label: 'Next Three Days', value: '3'},
  {label: 'Week', value: '7'},
  {label: 'Two Weeks', value: '14'},
];
