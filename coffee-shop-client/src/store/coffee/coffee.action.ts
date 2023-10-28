import { createAction } from '@reduxjs/toolkit';

import { COFFEE_ACTION_TYPES } from './coffee.types';
import { Coffee } from '../../models';

export const getAllCoffeesStart = createAction(COFFEE_ACTION_TYPES.GET_ALL_COFFEES_START);

export const getAllCoffeesSuccess = 
  createAction(COFFEE_ACTION_TYPES.GET_ALL_COFFEES_SUCCESS, (allCoffees: Coffee[]) => {
    return { payload: allCoffees };
  });