import { Fragment, useState } from 'react';
//подключаю свойство fragment и useState

import Header from './components/Layout/Header';
//импортирую компонент Header
import Meals from './components/Meals/Meals';
//импортирую компонент Meals
import Cart from './components/Cart/Cart';
//импортирую компонент Cart

function App() {
  //подключаю управление модального окна через состояние false/true
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {/*подключаю компонент Header в верстку */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
