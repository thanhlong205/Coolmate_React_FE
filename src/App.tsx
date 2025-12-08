import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
