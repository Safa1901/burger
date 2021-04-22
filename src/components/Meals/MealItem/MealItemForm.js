import Input from '../../UI/Input';
//добавляю компонент input 
import classes from './MealItemForm.module.css';

//подключаю компонент через props. Реализую форму добавления колличества блюд с помощью компонента input и button
const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input 
                label="Amount" 
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
        </form>
    );
};

export default MealItemForm;