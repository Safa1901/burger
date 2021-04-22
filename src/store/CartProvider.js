import CartContext from './cart-context';

const CartProvider = (props) => {
    //реализация добавления и удаления элементов
    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler =id =>{};

    const cartContext = {
        items: [],
        totalAmount: 0,
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