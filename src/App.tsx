import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Chekout/Checkout';
import Account from './customer/pages/Account/Account';

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        <Account />
      </div>
    </ThemeProvider>
  );
}

export default App;
