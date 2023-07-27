import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsSlice';
import authReducer from './auth/authSlice';
// import authSlice from './auth/authSlice';
// import contactsSlice from './contacts/contactsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth', // klucz, pod którym będą przechowywane dane w magazynie
  storage, //  magazyn do przechowywania danych (np. Local Storage)
  whitelist: ['token'], // lista slice'ów o nazwie token przechowywana w magazynie
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// const persistedReducer = persistReducer(
//   authPersistConfig,
//   combineReducers({
//     auth: authReducer,
//     contacts: contactsReducer,
//   })
// );

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

// export default store;
