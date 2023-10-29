import { useForm } from 'react-hook-form';
import { Coffee } from '../../models';
import './ProductForm.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface ProductFormProps {
    selectedCoffee: Coffee,
}

const ProductForm = ({selectedCoffee}: ProductFormProps) => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        // reset the form with the new selected coffee data
        reset(selectedCoffee);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedCoffee]);

    const onSubmit = handleSubmit(data => {
        console.log(data);
        // TODO: use custom pop up
        alert("Thank you for ordering. Enjoy your day & coffee!");
        navigateToHome();
    });

    const navigateToHome = () => {
        navigate('/');
    };
    
    return (
            <div id='specifications'>
                <h2>Customize your order</h2>
                <form onSubmit={onSubmit}>
                <div className='field'>
                    <label>Dose of Coffee:</label>
                    <input data-testid="dose-coffee" type='number' max="12" {...register("coffee", { required: true })} />
                </div>
                <div className='field'>
                    <label>Dose of Milk:</label>
                    <input data-testid="dose-milk" type='number' max="12" {...register("milk")} />
                </div>
                <div className='field'>
                    <label>Pack of Sugar:</label>
                    <input data-testid="pack-sugar" type='number' max="12" {...register("sugar")} />
                </div>
                <div className='field'>
                    <label>Flavor:</label>
                    <select data-testid="flavor" {...register("flavor")}>
                        <option value="none">None</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="caramel">Caramel</option>
                        <option value="oreo">Oreo</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className='field'>
                    <input type="button" className='btn btn-secondary' onClick={navigateToHome} value='Cancel' />
                    <input type="submit" className='btn btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;