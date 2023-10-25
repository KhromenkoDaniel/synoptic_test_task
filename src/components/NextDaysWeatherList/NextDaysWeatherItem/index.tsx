import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './NextDaysWeatherItem.styles';

import {weatherImages} from '../../../utils/constants';
import {TNextDaysWeatherItem} from '../../../types';

import {useSelector} from 'react-redux';
import {RootState} from '../../../store/root-reducer';

function NextDaysWeatherItem({item, dayName}: TNextDaysWeatherItem) {
  const themeIsLight = useSelector(
    (state: RootState) => state.weather.themeIsLight,
  );

  const textStyles = {
    color: themeIsLight ? '#0f2c33' : '#fff',
  };

  const backgroundColorStyles = {
    backgroundColor: themeIsLight
      ? 'rgba(15, 44, 51,0.2)'
      : 'rgba(255, 255, 255,0.2)',
  };

  return (
    <View style={[styles.wrapperItem, backgroundColorStyles]}>
      <Image
        source={weatherImages[item.day?.condition?.text || 'other']}
        style={styles.wrapperItemDayImg}
      />
      <Text style={[styles.wrapperItemDayName, textStyles]}>{dayName}</Text>
      <Text style={[styles.wrapperItemDayTemp, textStyles]}>
        {item.day?.avgtemp_c}&#176;
      </Text>
    </View>
  );
}

export default NextDaysWeatherItem;
