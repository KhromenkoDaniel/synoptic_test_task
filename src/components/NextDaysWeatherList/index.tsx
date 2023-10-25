import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CalendarDaysIcon} from 'react-native-heroicons/solid';

import {TDateTimeFormatOptions, TNextDaysWeatherList} from '../../types';

import {styles} from './NextDaysWeatherList.styles';
import NextDaysWeatherItem from './NextDaysWeatherItem';

function NextDaysWeatherList({weather}: TNextDaysWeatherList) {
  function getDayNameFromDate(dateString: string): string {
    const date = new Date(dateString);
    const options: TDateTimeFormatOptions = {weekday: 'long'};
    let dayName = date.toLocaleDateString('en-US', options);
    dayName = dayName.split(',')[0];
    return dayName;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.calendarDays}>
        <CalendarDaysIcon size="22" color="white" />
        <Text style={styles.calendarDaysText}>Daily forecast:</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}>
        {weather?.forecast?.forecastday?.map((item, index) => {
          const dayName = getDayNameFromDate(item.date);

          return (
            <NextDaysWeatherItem key={index} item={item} dayName={dayName} />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default NextDaysWeatherList;
