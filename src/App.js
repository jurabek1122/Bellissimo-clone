import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
// import Corusel from './components/Corusel';
import ShoppingCard from './components/ShoppingCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App () {

  const [cart, setCart] = useState([]);
  
  const addCart = (item) => {
    const productList = [...cart];
    if(!productList.includes(item)){
      productList.push(item);
      const index = productList.indexOf(item);
      productList[index].quantity++;
    }
    setCart(productList)
    localStorage.setItem("cart", JSON.stringify(productList));
  }
  
    return (
        <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Product addCart={addCart} />} />
          <Route path="/card" element={<ShoppingCard cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    );
};

export default App;