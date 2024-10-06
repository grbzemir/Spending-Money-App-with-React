import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import products from './products.json';
import Product from './Components/Product';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log('Basket:', basket);
  }, [basket]);

  return (
    <div>
      <Header money={money} />
      {products.map((product, index) => (
        <Product key={index} basket={basket} setBasket={setBasket} product={product} />
      ))}
    </div>
  );
}

export default App;
