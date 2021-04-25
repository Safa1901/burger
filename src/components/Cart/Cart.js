import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

//реализация корзины по клику
const Cart = (props) => {
    const cartCtx = useContext(CartContext); //получаю доступ к контексту

    const totalAmount = `P${cartCtx.totalAmount.toFixed(2)}`; //оформляю корректный вывод ссумы 
    const hasItems = cartCtx.items.length > 0; //проверяю имеет ли \элементдлинну больше 0

    const cartItemRemoveHandler = id => {};
    const cartItemAddHandler = item => {};

    const cartItems = ( //реализация коректного отображения списка заказанного меню
        <ul className={classes['cart-items']}> 
            {cartCtx.items.map((item) => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} //реализация добавления и удаления блюд из списка
                onAdd={cartItemAddHandler.bind(null, item)}
                />
                ))}
        </ul>
    );
//вызов компонента Modal и наполнение содержимым
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Общая сумма</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>
                    Закрыть
                </button>
                {hasItems && <button className={classes.button}>Заказывать</button>} {/*в случае корректного ввода кнопка срабатывает */}
            </div>
        </Modal>
    );
};

export default Cart;