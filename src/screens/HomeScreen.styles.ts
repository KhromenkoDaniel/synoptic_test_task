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
  progressBar: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    marginHorizontal: 16,
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    marginBottom: 8,
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
  infoBlock: {
    marginTop: 8,
    marginBottom: 8,
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
  otherStatsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  otherStatsContainerImg: {
    width: 20,
    height: 20,
  },
  otherStatsContainerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    marginLeft: 5,
  },
});
