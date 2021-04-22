import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

//реалезация кнопки закрытия модального окна
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

//реализация кнопки заказа
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

//получения доступа к div через id
const portalElement = document.getElementById('overLays');

//создание компонента модального окна и реализация через портал, помещение кнопок 
const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
};

export default Modal;