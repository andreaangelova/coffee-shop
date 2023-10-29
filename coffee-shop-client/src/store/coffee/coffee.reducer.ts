import { COFFEE_ACTION_TYPES } from './coffee.types';
import { ActionWithPayload } from '../store.hooks';
import { Coffee } from '../../models';

interface INITIAL_STATE_TYPE {
  allCoffees: Coffee[],
  newCoffee: Coffee,
  selectedCoffee: Coffee | undefined,
  allCoffeesLoaded: boolean,
  loading: boolean,
}

export const INITIAL_STATE: INITIAL_STATE_TYPE = {
  allCoffees: [],
  newCoffee: {id: '0', name: 'Create your own', image: '/images/create-coffee.png'},
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
    case COFFEE_ACTION_TYPES.GET_COFFEE_BY_ID:
      const selectedCoffee = state.allCoffees.find((coffee: Coffee) => coffee.id === payload) || state.newCoffee;
      return {
        ...state,
        selectedCoffee
      };
    default:
      return state;
  }
};