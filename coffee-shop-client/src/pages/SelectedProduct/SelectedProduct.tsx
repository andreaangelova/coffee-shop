import './SelectedProduct.scss';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store.hooks';
import { getCoffeeById, selectedCoffeeSelector } from '../../store/coffee';
import { useSelector } from 'react-redux';
import ProductForm from '../../components/ProductForm';

const SelectedProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const selectedCoffee = useSelector(selectedCoffeeSelector);

  useEffect(() => {
    if (id)
      dispatch(getCoffeeById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
    {
      selectedCoffee &&
      <div>
        <div id="image-container">
            <h2 id='product-text'>Selected Product</h2>
            <img id='product-image' alt='coffee' src={selectedCoffee.image} className='coffee-img'></img>
        </div>
        <ProductForm selectedCoffee={selectedCoffee}></ProductForm>
      </div>
    }
    </div>
  );
};

export default SelectedProduct;