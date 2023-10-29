import { combineReducers } from 'redux';

import { coffeeReducer } from './coffee';

import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // if you do not want to persist this part of the state
  blacklist: []
};

const rootReducer = combineReducers({
  coffee: coffeeReducer
});
// this ensures your redux state is saved to persisted storage whenever it changes
export const persistedReducer = persistReducer(persistConfig, rootReducer);