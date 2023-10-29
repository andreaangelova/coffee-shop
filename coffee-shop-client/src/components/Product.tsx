import { useNavigate } from 'react-router-dom';
import { Coffee } from '../models';
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
          <h2 className='coffee-name'>{coffee.name}</h2>
          <div className="container">
          <img alt='coffee' src={coffee.image} className='coffee-img'></img>
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