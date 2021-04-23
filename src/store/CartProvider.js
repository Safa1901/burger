import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartStaate = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        };
    }
    return defaultCartStaate;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartStaate);

    //реализация добавления и удаления элементов
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
//создание компонента и подключение обертки для текста
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;