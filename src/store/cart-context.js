import React from 'react';

//создание компонента шаблона корзины, создаю переменную createContext для получения данных, удаления и добавления элементов
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id)=> {}
});

export default CartContext;