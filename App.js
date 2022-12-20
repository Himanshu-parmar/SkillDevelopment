import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import MainNavigator from './src/navigators/MainNavigator';
import store, {persistor} from './src/redux/store/store';
const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
