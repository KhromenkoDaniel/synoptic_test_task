import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  safeAreaView: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    backgroundColor: 'transparent',
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    marginHorizontal: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  weatherImage: {
    width: 200,
    height: 200,
  },
  currentCityText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  weatherImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temperatureText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  conditionText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginLeft: 5,
  },
  otherStatsInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeSwitcher: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
  },
});
