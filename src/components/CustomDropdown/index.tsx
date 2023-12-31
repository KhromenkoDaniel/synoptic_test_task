import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

import {daysData} from '../../utils/constants';
import {TCustomDropdown} from '../../types';

import CustomDropdownItem from './CustomDropdownItem';
import {styles} from './CustomDropdown.styles';

import {useDispatch, useSelector} from 'react-redux';
import {setSelectedAmountOfDays} from '../../store/slices/weatherSlice';
import {RootState} from '../../store/root-reducer';
import {AppDispatch} from '../../store/store';
import {fetchWeatherData} from '../../actions/weather';

function CustomDropdown({value, setValue, currentCity}: TCustomDropdown) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedAmountOfDays = useSelector(
    (state: RootState) => state.weather.selectedAmountOfDays,
  );
  const themeIsLight = useSelector(
    (state: RootState) => state.weather.themeIsLight,
  );
  const dropdownStyles = {
    backgroundColor: themeIsLight ? '#fff' : '#0f2c33',
    borderColor: themeIsLight ? '#0f2c33' : '#fff',
  };
  const selectedTextStyles = {
    color: themeIsLight ? '#0f2c33' : '#fff',
  };

  return (
    <Dropdown
      style={[styles.dropdown, dropdownStyles]}
      itemContainerStyle={styles.itemContainerStyle}
      containerStyle={styles.containerStyle}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyles]}
      placeholderStyle={styles.placeholderStyle}
      data={daysData}
      labelField="label"
      valueField="value"
      placeholder={selectedAmountOfDays}
      value={value}
      onChange={(item: any) => {
        setValue(item.value);
        dispatch(setSelectedAmountOfDays(item.value));
        dispatch(
          fetchWeatherData({
            city: currentCity,
            selectedAmountOfDays: item.value,
          }),
        );
      }}
      renderItem={CustomDropdownItem}
    />
  );
}

export default CustomDropdown;
