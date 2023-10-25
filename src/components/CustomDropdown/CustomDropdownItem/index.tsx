import {Text} from 'react-native';
import React from 'react';

import {styles} from './CustomDropdownItem.styles';

const CustomDropdownItem = (item: any) => {
  return <Text style={styles.item}>{item.label}</Text>;
};

export default CustomDropdownItem;
