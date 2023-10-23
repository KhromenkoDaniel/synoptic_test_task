import React, {useCallback, useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../actions/weather';
import {RootState} from '../store/root-reducer';
import axios from 'axios';
import {AppDispatch} from '../store/store';
import {opencageApiKey} from '../utils/constants';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

function HomeScreen(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const [currentCity, setCurrentCity] = useState<string | null>(null); // State to store the current city

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
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        },
        error => {
          console.error('Error getting current position:', error);
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
    checkAndRequestLocationPermission().then();
  }, [checkAndRequestLocationPermission]);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        {currentCity && (
          <View style={styles.container}>
            <Text>Current City: {currentCity}</Text>
            {weatherData && (
              <>
                <Text>Temperature: {weatherData.current.temp_c}°C</Text>
                <Text>
                  Weather Condition: {weatherData.current.condition.text}
                </Text>
              </>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
