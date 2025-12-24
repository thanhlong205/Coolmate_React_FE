import React, { useState } from 'react';
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
        {!isLogin ? <SellerAccountForm /> : <SellerLoginForm />}
        <div className=" mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">have count</h1>
          <Button
            onClick={handleShowPage}
            fullWidth
            sx={{ py: '11px' }}
            variant="outlined"
          >
            {isLogin ? 'Register' : 'Login'}
          </Button>
        </div>
      </section>
      {/* <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl">Join the marketplace Revolution</p>
            <p className="text-lg text-blue-400">Boost your sales today</p>
          </div>
          <img
            src="https://n7media.coolmate.me/image/June2025/coolmate-trai-nghiem-mua-sam-4-0.jpg"
            alt=""
          />
        </div>
      </section> */}
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center bg-gray-50">
        <div className="lg:w-[80%] px-5 space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight">
              Join the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Marketplace Revolution
              </span>
            </p>
            <p className="text-lg text-gray-500 font-medium">
              Boost your sales today with our premium tools
            </p>
          </div>

          {/* Phần Ảnh: Bo góc, đổ bóng và hover effect */}
          <div className="relative group">
            {/* Hiệu ứng bóng mờ phía sau ảnh */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <img
              className="relative w-full rounded-2xl shadow-2xl transform transition duration-500 hover:scale-[1.02]"
              src="https://n7media.coolmate.me/image/June2025/coolmate-trai-nghiem-mua-sam-4-0.jpg"
              alt="Marketplace Revolution"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
