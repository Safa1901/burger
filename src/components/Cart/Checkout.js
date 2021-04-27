import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;


const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputsValidity ({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid = 
        enteredNameIsValid && 
        enteredStreetIsValid && 
        enteredPostalCodeIsValid &&
        enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        //отправить данные корзины
    };

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postalCode ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Ваше Имя</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Пожалуйста введите корректно Имя!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Улица</label>
                <input type="text" id="street" ref={streetInputRef}  />
                {!formInputsValidity.street && <p>Пожалуйста введите корректно улицу!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Почтовый индекс</label>
                <input type="text" id="postal" ref={postalCodeInputRef}  />
                {!formInputsValidity.postalCode && <p>Пожалуйста введите корректно почтовый индекс!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">Город</label>
                <input type="text" id="city" ref={cityInputRef}  />
                {!formInputsValidity.city && <p>Пожалуйста введите корректно город!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Отменить</button>
                <button className={classes.submit}>Подтвердить</button>
            </div>
        </form>
    )
};

export default Checkout;