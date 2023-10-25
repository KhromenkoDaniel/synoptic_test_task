import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 50,
    backgroundColor: '#0F2C33FF',
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 2,
    borderRadius: 12,
    padding: 6,
  },
  containerStyle: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#0f2c33',
    borderWidth: 2,
  },
  itemContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#0f2c33',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#fff',
  },
});
