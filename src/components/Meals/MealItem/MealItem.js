import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

//создаю компонент с версткой для одной секции
const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `P${props.price.toFixed(2)}`;

    const addToCartHandler = amount => { //получаю доступ к контексту и передаю через props.id компонентов
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className ={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            {/*подключаю форму с колличеством блюд */}
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;