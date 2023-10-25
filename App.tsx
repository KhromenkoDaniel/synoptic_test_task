import * as React from 'react';

import NavigationApp from './src/navigation';

import {Provider} from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
}

export default App;
