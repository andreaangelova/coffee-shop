import { COFFEE_ACTION_TYPES } from './coffee.types';
import { ActionWithPayload } from '../store.hooks';

export const INITIAL_STATE = {
  allCoffees: [],
  newCoffee: {id: '0', name: 'Create your own'},
  selectedCoffee: undefined,
  allCoffeesLoaded: false,
  loading: false,
};

export const coffeeReducer = (state = INITIAL_STATE, action: ActionWithPayload) => {
  const { type, payload } = action;

  switch (type) {
    case COFFEE_ACTION_TYPES.GET_ALL_COFFEES_START:
      return { ...state, loading: true };
       // TODO: load spinner
    case COFFEE_ACTION_TYPES.GET_ALL_COFFEES_SUCCESS:
      return {
        ...state,
        allCoffees: payload,
        allCoffeesLoaded: true,
        loading: false
      };
    default:
      return state;
  }
};