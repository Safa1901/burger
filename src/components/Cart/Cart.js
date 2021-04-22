import Modal from '../UI/Modal';
import classes from './Cart.module.css';

//реализация корзины по клику
const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}> 
            {[{id: 'c1', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
                ))}
        </ul>
    );
//вызов компонента Modal и наполнение содержимым
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Общая сумма</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>
                    Закрыть
                </button>
                <button className={classes.button}>Заказывать</button>
            </div>
        </Modal>
    );
};

export default Cart;