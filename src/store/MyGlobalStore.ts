import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '../features/counter/CounterReducer';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

// The reducer, persisted.
const persistedReducer = persistReducer(
  {
    key: 'myPersistedReducer',
    storage: AsyncStorage,
  },
  counterReducer,
);

// The store.
const store = configureStore({
  reducer: persistedReducer,
  // Without below middleware option it will crash.
  // More details on: https://github.com/rt2zz/redux-persist/issues/988
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// The store, persisted.
const persistedStore = persistStore(store);

export {store, persistedStore};
