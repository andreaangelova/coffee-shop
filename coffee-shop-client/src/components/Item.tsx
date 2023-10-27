import { Coffee } from '../models';
import './Item.scss';

interface ItemProps {
    coffee: Coffee
}

const Item = ({coffee}: ItemProps) => {

  return (
      <div>
          <h2>{coffee.name}</h2>
          <div className="container">
              <img alt='coffee' src={coffee.image} className='coffee-img'></img>
              <div className="middle">
              <button className="btn-primary">Customize & Oder</button>
              </div>
          </div>
      </div>
  );
};

export default Item;