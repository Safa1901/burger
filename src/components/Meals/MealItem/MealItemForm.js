import { useRef, useState } from 'react';

import Input from '../../UI/Input';
//добавляю компонент input 
import classes from './MealItemForm.module.css';

//подключаю компонент через props. Реализую форму добавления колличества блюд с помощью компонента input и button
const MealItemForm = (props) => {
    const [amountIsValid, setAmountValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enterdAmount = amountInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        if (
            enterdAmount.trim().length === 0 || 
            enterdAmountNumber < 1 ||
            enterdAmountNumber > 5
            ) {
                setAmountValid(false);
            return;
        }
        props.onAddToCart(enterdAmountNumber);
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
            {!amountIsValid && <p>Пожалуйста, введите количество (1-5).</p>}
        </form>
    );
};

export default MealItemForm;