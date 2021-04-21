import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
    <section className={classes.summary}>
        <h2>Вкусная еда, доставленная вам</h2>
        <p>
            Выберите свое любимое блюдо из нашего широкого выбора доступных блюд и насладитесь вкусным обедом или ужином дома.
        </p>
        <p>
            Все наши блюда готовятся из высококачественных ингредиентов точно в срок и, конечно же, опытными поварами!
        </p>
    </section>
    );
};

export default MealsSummary;