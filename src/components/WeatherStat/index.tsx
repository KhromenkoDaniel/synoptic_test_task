import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './WeatherStat.styles';

import {TWeatherStat} from '../../types';

import {useSelector} from 'react-redux';
import {RootState} from '../../store/root-reducer';

const WeatherStat = ({iconSource, value, label}: TWeatherStat) => {
  const themeIsLight = useSelector(
    (state: RootState) => state.weather.themeIsLight,
  );
  const textStyles = {
    color: themeIsLight ? '#0f2c33' : '#fff',
  };
  return (
    <View style={styles.otherStatsContainer}>
      <Image source={iconSource} style={styles.otherStatsContainerImg} />
      <Text style={[styles.otherStatsContainerText, textStyles]}>
        {value}
        {label}
      </Text>
    </View>
  );
};

export default WeatherStat;
