import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
//подключение компонента Meals summary(меню)
import AvailableMeals from './AvailableMeals';
//подключение компонента availlable meals (имеется в наличие)

//создание компонента питание и подключение компонента заголовка и компонента меню
const Meals = () => {
    return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
    );
};

export default Meals;