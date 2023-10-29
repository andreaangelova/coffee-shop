import { RootState } from '../store';

export const allCoffeesSelector = (state: RootState) => state.coffee.allCoffees;
export const newCoffeeSelector = (state: RootState) => state.coffee.newCoffee;
export const allCoffeesLoadedSelector = (state: RootState) => state.coffee.allCoffeesLoaded;