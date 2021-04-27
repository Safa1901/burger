import { useContext, useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

//реализация корзины по клику
const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext); //получаю доступ к контексту

    const totalAmount = `P${cartCtx.totalAmount.toFixed(2)}`; //оформляю корректный вывод ссумы 
    const hasItems = cartCtx.items.length > 0; //проверяю имеет ли элемент длинну больше 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 }); //добавление индекса
    };
    
    const orderHandler = () => {
        setIsCheckout(true);
    };

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
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>
                Закрыть
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Заказывать
                </button>
            )}
        </div>
    );

//вызов компонента Modal и наполнение содержимым
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Общая сумма</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;