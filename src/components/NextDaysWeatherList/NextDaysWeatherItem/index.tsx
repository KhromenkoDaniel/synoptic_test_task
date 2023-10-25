import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './NextDaysWeatherItem.styles';

import {weatherImages} from '../../../utils/constants';
import {TNextDaysWeatherItem} from '../../../types';

function NextDaysWeatherItem({item, dayName}: TNextDaysWeatherItem) {
  return (
    <View style={styles.wrapperItem}>
      <Image
        source={weatherImages[item.day?.condition?.text || 'other']}
        style={styles.wrapperItemDayImg}
      />
      <Text style={styles.wrapperItemDayName}>{dayName}</Text>
      <Text style={styles.wrapperItemDayTemp}>{item.day?.avgtemp_c}&#176;</Text>
    </View>
  );
}

export default NextDaysWeatherItem;
