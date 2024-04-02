import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header/>
      <Shop onAddItemToCart={handleAddItemToCart} />
    </CartContextProvider>
  );
}

export default App;
