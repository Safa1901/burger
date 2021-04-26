import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
//подключаю компонент meal item
import classes from './AvailableMeals.module.css';

//реализую компонент,так же не использую props, компонент переиспользоваться не будет, объявляем переменную meallist и присваеваем значение массива DUMMY_MEALS. 
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://burger-7ba40-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealList = meals.map((meal) => (
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