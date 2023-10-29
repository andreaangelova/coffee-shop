import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { INITIAL_STATE, coffeeReducer } from '../store/coffee';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

const renderWithProviders = (component, state = {coffee: INITIAL_STATE}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });
  return act(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>{component}</Provider>
      </BrowserRouter>
    );
  });
};

export default renderWithProviders;