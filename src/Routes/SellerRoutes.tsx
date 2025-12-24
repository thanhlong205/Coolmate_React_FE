import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../seller/pages/SellerDashboard/Dashboard';
import Product from '../customer/pages/Product/Product';
import AddProducts from '../seller/pages/Prodcts/AddProducts';
import Transaction from '../seller/pages/Payment/Transaction';
import Payment from '../seller/pages/Payment/Payment';
import Profile from '../seller/pages/Account/Profile';
import Order from '../seller/pages/Orders/Order';
import Prodcuts from '../seller/pages/Prodcts/Prodcuts';

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Prodcuts />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;
