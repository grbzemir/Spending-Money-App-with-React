import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import products from './products.json';
import Product from './Components/Product';
import Basket from './Components/Basket';

function App() {

  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  }

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product, index) => (
          <Product key={index} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      {total > 0 && <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />}
    </>
  );
}

export default App;
