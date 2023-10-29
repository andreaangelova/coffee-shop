import { useForm } from 'react-hook-form';
import { Coffee } from '../../models';
import './ProductForm.scss';
import { useEffect } from 'react';

interface ProductProps {
    selectedCoffee: Coffee,
}

const ProductForm = ({selectedCoffee}: ProductProps) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = handleSubmit(data => console.log(data));

    useEffect(() => {
        // reset the form with the new selected coffee data
        reset(selectedCoffee);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedCoffee]);
    
    return (
            <div id='specifications'>
                <h2>Customize your order</h2>
                <form onSubmit={onSubmit}>
                <div className='field'>
                    <label>Dose of Coffee:</label>
                    <input type='number' max="12" {...register("coffee", { required: true })} />
                </div>
                <div className='field'>
                    <label>Dose of Milk:</label>
                    <input type='number' max="12" {...register("milk")} />
                </div>
                <div className='field'>
                    <label>Pack of Sugar:</label>
                    <input type='number' max="12" {...register("sugar")} />
                </div>
                <div className='field'>
                    <label>Flavor:</label>
                    <select {...register("flavor")}>
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
    );
};

export default ProductForm;