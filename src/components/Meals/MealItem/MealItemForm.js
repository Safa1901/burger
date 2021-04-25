import { useRef, useState } from 'react';

import Input from '../../UI/Input';
//добавляю компонент input 
import classes from './MealItemForm.module.css';

//подключаю компонент через props. Реализую форму добавления колличества блюд с помощью компонента input и button
const MealItemForm = (props) => {
    const [amountIsValid, setAmountValid] = useState(true) //создаю состояние для вывода ошибки при введение некоректного значения
    const amountInputRef = useRef();

    const submitHandler = event => { //подключаю к форме обработчик события и ставлю preventDefault для предотвращения перезагрузки страницы
        event.preventDefault();

        const enterdAmount = amountInputRef.current.value; //получаю доступ к значению через ссылку
        const enterdAmountNumber = +enterdAmount; //для ввода числа,а не строки объявляю 0 переменной и прибавляю полученное число

        if (
            enterdAmount.trim().length === 0 || 
            enterdAmountNumber < 1 ||
            enterdAmountNumber > 5
            ) {
                setAmountValid(false);
            return; //делаю проверку для ввода числа
        }
        props.onAddToCart(enterdAmountNumber); //вызываю полученное значение
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Колличество" 
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} 
            />
            <button>+ Добавить</button>
            {!amountIsValid && <p>Пожалуйста, введите количество (1-5).</p>} {/*сообщение для ввода корректного колличества */}
        </form>
    );
};

export default MealItemForm;