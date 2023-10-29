import ProductForm from './ProductForm';
import { Flavor } from '../../models';
import renderWithProviders from '../../utils/renderWithProviders';
import { screen } from '@testing-library/react';

test('expect form to be prefiled with coffee specifications', () => {
  const selectedCoffee = {
    id: '0',
    name: 'Create your own', 
    image: '', 
    coffee: 1, 
    milk: 3, 
    sugar: 5, 
    flavor: Flavor.Orange
  }
  renderWithProviders(<ProductForm selectedCoffee={selectedCoffee} />);
  const doseCoffee = screen.getByTestId('dose-coffee');
  expect(doseCoffee).toHaveValue(selectedCoffee.coffee);

  const doseMilk = screen.getByTestId('dose-milk');
  expect(doseMilk).toHaveValue(selectedCoffee.milk);

  const packSugar = screen.getByTestId('pack-sugar');
  expect(packSugar).toHaveValue(selectedCoffee.sugar);

  const flavor = screen.getByTestId('flavor');
  expect(flavor).toHaveValue(selectedCoffee.flavor);
});
