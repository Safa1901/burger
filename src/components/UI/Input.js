import React from 'react';

import classes from './Input.module.css';

//создаю кмпонент с версткой для реализации input
const Input = React.forwardRef((props, ref) => { // так как я использовала preventDefault, но ине нужно получить данный из ввода, я подключаю useRef внутри компонента и передаю его как параметр
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;