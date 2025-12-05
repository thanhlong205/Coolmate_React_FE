import React from 'react';
import ElectricCategory from './ElectricCategory/ElectricCategory';
import CategoryGrid from './CategoryGrid/CategoryGrid';
import Deal from './Deal/Deal';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import { Storefront } from '@mui/icons-material';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />

        <div className="pt-13">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-18 text-center">
            TODAY'S DEAL
          </h1>
          <Deal />
        </div>

        <section className="py-15">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className="relative lg:px-20 h-[200px] lg:h-[450px] overflow-hidden group">
          <img
            className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-1000"
            src="https://n7media.coolmate.me/uploads/November2025/BLFD_OFimage-1.jpg"
            alt=""
          />

          <div className="absolute inset-0 lg:mx-20 rounded-md bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute inset-0 lg:mx-20 flex flex-col items-center justify-center text-white">
            {/* Chữ nhỏ ở trên */}
            <div className="flex items-center gap-4 mb-2 opacity-90">
              <span className="h-[1px] w-10 lg:w-20 bg-white"></span>
              <h3 className="text-sm lg:text-xl uppercase tracking-widest font-medium">
                Sell Your Product
              </h3>
              <span className="h-[1px] w-10 lg:w-20 bg-white"></span>
            </div>

            <h1 className="text-5xl lg:text-[140px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-xl">
              COOLMATE
            </h1>

            {/* Nút nằm đè lên dưới chữ */}
            <div className="mt-4 lg:mt-8">
              <Button
                variant="contained"
                size="large"
                startIcon={<Storefront />}
                sx={{
                  bgcolor: 'lightBlue',
                  color: 'black',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#eee' },
                }}
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
