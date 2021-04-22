import CartIcon from '../Cart/CartIcon';
//подключаю svg файл в кнопку
import classes from './HeaderCartButton.module.css';
//поключение стилей

//создаю компонент кнопки корзина
const HeaderCartButton = (props) => {
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon /> {/*реализация svg */}
        </span>
        <span>Твоя карта</span>
        <span className={classes.badge}>3</span>
        {/*наполнение кнопки содержимым */}
    </button>
    );
};

export default HeaderCartButton;