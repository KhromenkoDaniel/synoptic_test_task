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
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../actions/weather';
import {RootState} from '../store/root-reducer';
import axios from 'axios';
import {AppDispatch} from '../store/store';
import {opencageApiKey, weatherImages} from '../utils/constants';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {styles} from './HomeScreen.styles';
import * as Progress from 'react-native-progress';

function HomeScreen(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
    checkAndRequestLocationPermission().then();
  }, [checkAndRequestLocationPermission]);

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={styles.bgImage}
        blurRadius={70}
        source={require('../../assets/images/bg.png')}
      />
      <SafeAreaView style={styles.wrapper}>
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
                    <View style={styles.infoBlock}>
                      <Text style={styles.temperatureText}>
                        {weatherData.current.temp_c}&#176;
                      </Text>
                      <Text style={styles.conditionText}>
                        {weatherData.current.condition.text}
                      </Text>
                    </View>
                    <View style={styles.otherStatsInfoWrapper}>
                      <View style={styles.otherStatsContainer}>
                        <Image
                          source={require('../../assets/icons/wind.png')}
                          style={styles.otherStatsContainerImg}
                        />
                        <Text style={styles.otherStatsContainerText}>
                          {weatherData.current?.wind_kph}km
                        </Text>
                      </View>
                      <View style={styles.otherStatsContainer}>
                        <Image
                          source={require('../../assets/icons/drop.png')}
                          style={styles.otherStatsContainerImg}
                        />
                        <Text style={styles.otherStatsContainerText}>
                          {weatherData.current?.humidity}%
                        </Text>
                      </View>
                      <View style={styles.otherStatsContainer}>
                        <Image
                          source={require('../../assets/icons/pressure.png')}
                          style={styles.otherStatsContainerImg}
                        />
                        <Text style={styles.otherStatsContainerText}>
                          {weatherData.current?.pressure_mb}mb
                        </Text>
                      </View>
                    </View>
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
