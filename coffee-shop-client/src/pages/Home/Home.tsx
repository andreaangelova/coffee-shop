import { useEffect, useState } from 'react';
import Product from '../../components/Product';
import CoffeeService from '../../services/coffee.service';
import { Coffee } from '../../models';
import './Home.scss';

const Home = () => {
  const createCoffee = {id: '0', name: 'Create your own'};
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getAllCoffees();
  }, []);

  const getAllCoffees = async () => {
    const responseCoffees = await CoffeeService.getAllCoffees();
    setCoffees(responseCoffees);
  }

  return (
    <div>
      <h1>Choose your coffee</h1>
      <div id='grid'>
        <Product key={0} coffee={createCoffee} />
        {coffees.map((coffee: Coffee) => <Product key={coffee.id} coffee={coffee} />) }
        </div>
    </div>
  );
};

export default Home;