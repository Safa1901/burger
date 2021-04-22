import { Fragment } from "react";
  // подключаю свойство fragment в header для переиспользования элемента


import HeaderCartButton from './HeaderCartButton';
//подключение компонента кнопки
import mealsImage from '../../assets/meals.jpg';
//создаю ссылку на картинку
import classes from './Header.module.css';
// подключаю стили


// создаю компонент заголовка
const Header = (props) => {
    return (
        <Fragment>
            <header className ={classes.header}>
                <h1>ReactПитание</h1> 
                <HeaderCartButton onClick={props.onShowCart} />
                {/*реализация компонента корзины */}
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Полный стол вкусной еды!' />
            </div> {/*использую ссылку на картинку */}
        </Fragment>
    );
};

export default Header; 