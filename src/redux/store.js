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
import reducers from './reducers';

const phonebookPersistConfig = {
   key: 'contacts',
   storage,
   blacklist: ['filter'],
 };

 const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
 
 export const store = configureStore({
   reducer: {
     contacts: persistReducer(phonebookPersistConfig, reducers),
   },
  //  middleware (getDefaultMiddleware) {
  // return getDefaultMiddleware({
  //    serializableCheck: {
  //      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

  //    },
  //  })},
   devTools: process.env.NODE_ENV === 'development',
   middleware,
 });
 
 export const persistor = persistStore(store);