import { useReducer } from 'react';

import CartContext from './cart-context';

//состояние корзины по умолчанию
const defaultCartStaate = {
    items: [],
    totalAmount: 0
};

//создаю компонент, который будет управлять состосянием и будет проверять является ли какое-то значение уже частью заказа
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item); //получение общего колличества блюд
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount; // получение общей суммы
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        };
    }
    return defaultCartStaate;
};

//создаю компонент, который будет управлять контекстом и предоставлять данные всем компонентам
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartStaate);

    //реализация логики управления элементом
    //добавляю элемент добавления
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    // так же добавляю элемент удаления 
    const removeItemFromCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
//возвращаю CartContext через провайдер и получаю доступ к props CartProvider
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;