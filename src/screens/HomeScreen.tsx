import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import axios from 'axios';
import * as Progress from 'react-native-progress';

import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../actions/weather';
import {RootState} from '../store/root-reducer';
import {AppDispatch} from '../store/store';

import {opencageApiKey, weatherImages} from '../utils/constants';

import {styles} from './HomeScreen.styles';
import CustomDropdown from '../components/CustomDropdown';
import NextDaysWeatherList from '../components/NextDaysWeatherList';
import WeatherStat from '../components/WeatherStat';

function HomeScreen(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather.data);

  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentOptionInDropdown, setcurrentOptionInDropdown] = useState('1');

  const fetchWeather = useCallback(() => {
    try {
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;

          try {
            const opencageApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${opencageApiKey}`;

            const response = await axios.get(opencageApiUrl);
            const city = response.data.results[0].components.city;

            setCurrentCity(city);
            dispatch(fetchWeatherData(city));
            setLoading(false);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        },
        error => {
          console.error('Error getting the current position:', error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, [dispatch]);

  const requestLocationPermission = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to provide weather information.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          fetchWeather();
        } else {
          console.log('Location permission denied');
        }
      } else {
        const locationPermission = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        if (locationPermission === RESULTS.GRANTED) {
          fetchWeather();
        } else if (locationPermission === RESULTS.DENIED) {
          console.log('Location permission denied');
        } else if (locationPermission === RESULTS.BLOCKED) {
          console.log('Location permission blocked');
        }
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  }, [fetchWeather]);

  const checkAndRequestLocationPermission = useCallback(async () => {
    try {
      const locationPermission = await check(
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      );
      if (locationPermission === RESULTS.GRANTED) {
        fetchWeather();
      } else {
        await requestLocationPermission();
      }
    } catch (error) {
      console.error(
        'Error checking and requesting location permission:',
        error,
      );
    }
  }, [requestLocationPermission, fetchWeather]);

  useEffect(() => {
    setLoading(true);
    checkAndRequestLocationPermission().then(() => {
      dispatch(
        fetchWeatherData({
          city: currentCity,
          selectedAmountOfDays: currentOptionInDropdown,
        }),
      );
    });
  }, [
    checkAndRequestLocationPermission,
    currentCity,
    dispatch,
    currentOptionInDropdown,
  ]);

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={styles.bgImage}
        blurRadius={70}
        source={require('../../assets/images/bg.png')}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <CustomDropdown
            value={currentOptionInDropdown}
            setValue={setcurrentOptionInDropdown}
            currentCity={currentCity}
          />
          <View style={styles.themeSwitcher}>
            <Text>1</Text>
          </View>
        </View>

        {loading ? (
          <View style={styles.progressBar}>
            <Progress.CircleSnail
              style={styles.progressBar}
              thickness={10}
              size={140}
              color="#14323A"
              strokeCap="round"
            />
          </View>
        ) : (
          <View>
            {currentCity && (
              <View style={styles.container}>
                <Text style={styles.currentCityText}>{currentCity}</Text>
                {weatherData && (
                  <>
                    <View style={styles.weatherImageContainer}>
                      <Image
                        source={
                          weatherImages[weatherData.current.condition.text]
                        }
                        style={styles.weatherImage}
                      />
                    </View>
                    <View>
                      <Text style={styles.temperatureText}>
                        {weatherData.current.temp_c}&#176;
                      </Text>
                      <Text style={styles.conditionText}>
                        {weatherData.current.condition.text}
                      </Text>
                    </View>
                    <View style={styles.otherStatsInfoWrapper}>
                      <WeatherStat
                        iconSource={require('../../assets/icons/wind.png')}
                        value={weatherData.current?.wind_kph}
                        label="km"
                      />
                      <WeatherStat
                        iconSource={require('../../assets/icons/drop.png')}
                        value={weatherData.current?.humidity}
                        label="%"
                      />
                      <WeatherStat
                        iconSource={require('../../assets/icons/pressure.png')}
                        value={weatherData.current?.pressure_mb}
                        label="mb"
                      />
                    </View>
                    {+currentOptionInDropdown > 1 && (
                      <NextDaysWeatherList weather={weatherData} />
                    )}
                  </>
                )}
              </View>
            )}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
