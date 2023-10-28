
import CoffeeService from '../../services/coffee.service';
import { AppDispatch } from '../store';
import {getAllCoffeesStart, getAllCoffeesSuccess} from './coffee.action';

export const allCoffeesAsync = async (dispatch: AppDispatch) => {
    dispatch(getAllCoffeesStart());
    const response = await CoffeeService.getAllCoffees();
    dispatch(getAllCoffeesSuccess(response));
    // TODO: add getAllCoffeesError action
};