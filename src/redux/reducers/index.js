import { combineReducers } from 'redux';
import { getPersistConfig } from 'redux-deep-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducers from './user';

const rootReducer = combineReducers({ userReducers });

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['userReducers.user'],
  rootReducer,
});

export default persistReducer(persistConfig, rootReducer);
