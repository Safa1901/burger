import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
//подключаю компонент meal item
import classes from './AvailableMeals.module.css';

//реализую компонент,так же не использую props, компонент переиспользоваться не будет, объявляем переменную meallist и присваеваем значение массива DUMMY_MEALS. 
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://burger-7ba40-default-rtdb.firebaseio.com/meals.json'
      );
      
      if (!response.ok) {
        throw new Error('Что-то пошло не так!');
      }

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
      setIsLoading(false);
    };

    
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsIsLoading}>
        <p>Загрузка...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

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