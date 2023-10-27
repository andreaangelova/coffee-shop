import { useEffect, useState } from 'react';
import CoffeeService from '../services/coffee.service';
import { Coffee } from '../models';
import './Home.scss';

const Home = () => {
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
        {coffees.map((coffee: Coffee) => 
          <div key={coffee.id}>
            <h2>{coffee.name}</h2>
            <img alt='coffee' src={coffee.image} className='coffee-img'></img>
          </div>
        )}
        </div>
    </div>
  );
};

export default Home;