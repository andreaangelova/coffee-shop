import { useNavigate } from 'react-router-dom';
import { Coffee } from '../models';
import createCoffeeImg from './../assets/images/create-coffee.png';
import './Product.scss';

interface ProductProps {
    coffee: Coffee
}

const Product = ({coffee}: ProductProps) => {
    const navigate = useNavigate();

    const selectedProduct = (coffeeId: string) => {
        navigate(`product/${coffeeId}`);
    };
  return (
      <div>
          <h2>{coffee.name}</h2>
          <div className="container">
            {
                coffee.image ? 
                    <img alt='coffee' src={coffee.image} className='coffee-img'></img> : 
                    <img alt='create-coffee' src={createCoffeeImg} className='coffee-img coffee-create'></img>
            }
              <div className="middle">
              <button className="btn-primary" onClick={() => selectedProduct(coffee.id)}>
                    Customize & Oder
                </button>
            </div>
          </div>
      </div>
  );
};

export default Product;