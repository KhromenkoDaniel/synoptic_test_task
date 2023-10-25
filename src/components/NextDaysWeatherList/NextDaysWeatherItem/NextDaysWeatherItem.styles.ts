import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapperItem: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 86,
    borderRadius: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    gap: 8,
  },
  wrapperItemDayImg: {
    width: 44,
    height: 44,
  },
  wrapperItemDayName: {
    color: '#fff',
  },
  wrapperItemDayTemp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
