import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './WeatherStat.styles';

import {TWeatherStat} from '../../types';

const WeatherStat = ({iconSource, value, label}: TWeatherStat) => (
  <View style={styles.otherStatsContainer}>
    <Image source={iconSource} style={styles.otherStatsContainerImg} />
    <Text style={styles.otherStatsContainerText}>
      {value}
      {label}
    </Text>
  </View>
);

export default WeatherStat;
