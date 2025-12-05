import React from 'react';

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[15rem] object-cover object-top"
        src="https://n7media.coolmate.me/uploads/November2025/catexam_ao-khoac.jpg?aio=w-672"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-1 text-center">
        <p className="text-lg font-semibold">Áo phao gió</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
