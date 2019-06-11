import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App;

