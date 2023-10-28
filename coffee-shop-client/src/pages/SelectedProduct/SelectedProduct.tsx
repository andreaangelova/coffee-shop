import { useForm } from "react-hook-form";
import './SelectedProduct.scss';

const SelectedProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
      <div>
        <div id="image-container">
            <h2 id='product-text'>Selected Product</h2>
            {/* TODO: get image from selected coffee */}
            <img id='product-image' alt='coffee' src='https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg' className='coffee-img'></img>
        </div>

        <div id='specifications'>
          <h2>Customize your order</h2>
          <form onSubmit={onSubmit}>
            <div className='field'>
              <label>Dose of Coffee:</label>
              <input type='number' defaultValue="1" max="12" {...register("coffee", { required: true })} />
            </div>
            <div className='field'>
              <label>Dose of Milk:</label>
              <input type='number' defaultValue="0" max="12" {...register("milk")} />
            </div>
            <div className='field'>
              <label>Pack of Sugar:</label>
              <input type='number' defaultValue="0" max="12" {...register("sugar")} />
            </div>
            <div className='field'>
              <label>Flavor:</label>
              <select defaultValue="none" {...register("flavor")}>
                <option value="none">None</option>
                <option value="chocolate">Chocolate</option>
                <option value="caramel">Caramel</option>
                <option value="oreo">Oreo</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <div className='field'>
              <input type="reset" className='btn btn-secondary' value='Cancel' />
              <input type="submit" className='btn btn-primary' />
            </div>
        </form>
        </div>
      </div>
  );
};

export default SelectedProduct;