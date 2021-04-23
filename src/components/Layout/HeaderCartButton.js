import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
//подключаю svg файл в кнопку
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
//поключение стилей

//создаю компонент кнопки корзина и передаю в переменную данные полученные из createContext
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

//получаем значение через мтод reduce и передаем в переменную
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon /> {/*реализация svg */}
        </span>
        <span>Твой заказ</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        {/*наполнение кнопки содержимым */}
    </button>
    );
};

export default HeaderCartButton;