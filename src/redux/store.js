import { configureStore, } from '@reduxjs/toolkit';
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
// import logger from 'redux-logger';
import reducers from './reducers';

const phonebookPersistConfig = {
   key: 'contacts',
   storage,
   blacklist: ['filter'],
 };
 
 export const store = configureStore({
   reducer: {
     contacts: persistReducer(phonebookPersistConfig, reducers),
   },
   middleware (getDefaultMiddleware) {
  return getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

     },
   })},
   devTools: process.env.NODE_ENV === 'development',
 });
 
 export const persistor = persistStore(store);



 