import { combineReducers } from 'redux';

import { coffeeReducer } from './coffee';

export const rootReducer = combineReducers({
  coffee: coffeeReducer
});