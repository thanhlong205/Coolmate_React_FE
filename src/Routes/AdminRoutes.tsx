import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SellerTable from '../admin/Pages/Sellers/SellerTable';
import Coupon from '../admin/Pages/Coupon/Coupon';
import Deal from '../admin/Pages/HomePage/Deal';
import ShopByCategoryTable from '../admin/Pages/HomePage/ShopByCategoryTable';
import ElectronicTable from '../admin/Pages/HomePage/ElectronicTable';
import GridTable from '../admin/Pages/HomePage/GridTable';
import AddNewCouponForm from '../admin/Pages/Coupon/AddNewCouponForm';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellerTable />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/add-coupon" element={<AddNewCouponForm />} />
        <Route path="/home-grid" element={<GridTable />} />
        <Route path="/electronics-category" element={<ElectronicTable />} />
        <Route path="/shop-by-category" element={<ShopByCategoryTable />} />
        <Route path="/deals" element={<Deal />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
