import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducer/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
  },
});

export default store;
export const persistor = persistStore(store);
