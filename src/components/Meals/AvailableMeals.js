import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Суши',
      description: 'Лучшая рыба и овощи',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Шницель',
      description: 'Немецкое блюдо!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Барбекю Бургер',
      description: 'Американский, сырой, мясистый',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Зеленая чаша',
      description: 'Здоровый ... и зеленый ...',
      price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
        />
    ));

    return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>
    );
};

export default AvailableMeals;