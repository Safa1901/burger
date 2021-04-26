import { useContext, useEffect, useState } from 'react';
//подключаю контекст для глубокого использывания, и исключения переиспользования множества props

import CartIcon from '../Cart/CartIcon';
//подключаю svg файл в кнопку
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
//поключение стилей

//создаю компонент кнопки корзина и передаю в переменную данные полученные из createContext для использования
const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

//получаем значение через мтод reduce и передаем в переменную, использую метод reduce для получения одного числового значения 
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`; //подключаю и реалезую эффект прыжка кнопки корзина

    useEffect (() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
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