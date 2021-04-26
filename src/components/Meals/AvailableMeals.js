import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
//подключаю компонент meal item
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  //создаю массив собъктами содержащие информацию деталей меню, каждому объекту в массиве присваевыем id номер для использования элемента
    {
      id: 'm1',
      name: 'Суши',
      description: 'Лучшая рыба и овощи',
      price: 1600,
    },
    {
      id: 'm2',
      name: 'Шницель',
      description: 'Немецкое блюдо!',
      price: 1200,
    },
    {
      id: 'm3',
      name: 'Барбекю Бургер',
      description: 'Американский, сырой, мясистый',
      price: 900,
    },
    {
      id: 'm4',
      name: 'Зеленая чаша',
      description: 'Здоровый ... и зеленый ...',
      price: 1350,
    },
];
//реализую компонент,так же не использую props, компонент переиспользоваться не будет, объявляем переменную meallist и присваеваем значение массива DUMMY_MEALS. 
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
      //реализую компонент meal item, в который через props пробрасываю верстку для этой секции и наполняю содержимым 
        <MealItem 
            key={meal.id} 
            id={meal.id}
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
        />
    ));
// создаю секцию с списком наименований полученных в переменную meallist из метода map и помещаю в заготовленную обертку Card с props
    return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>
    );
};

export default AvailableMeals;