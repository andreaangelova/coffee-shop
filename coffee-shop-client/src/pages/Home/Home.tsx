import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import { Coffee } from '../../models';
import { allCoffeesSelector, newCoffeeSelector, allCoffeesAsync, allCoffeesLoadedSelector } from '../../store/coffee';
import { useAppDispatch } from '../../store/store.hooks';

import './Home.scss';

const Home = () => {
  const newCoffee = useSelector(newCoffeeSelector);
  const coffees = useSelector(allCoffeesSelector);
  const allCoffeesLoaded = useSelector(allCoffeesLoadedSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!allCoffeesLoaded)
      dispatch(allCoffeesAsync);
  }, [dispatch]);

  return (
    <div>
      <h1>Choose your coffee</h1>
      <div id='grid'>
        <Product key={0} coffee={newCoffee} />
        {coffees.map((coffee: Coffee) => <Product key={coffee.id} coffee={coffee} />) }
        </div>
    </div>
  );
};

export default Home;