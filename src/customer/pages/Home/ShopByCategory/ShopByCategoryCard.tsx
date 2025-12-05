import React from 'react';
import './ShopByCategory.css';

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://n7media.coolmate.me/uploads/September2025/tat-chay-bo-co-dai-coolmate-active1-xam-phoi-xanh-1.jpg?aio=w-1100"
          alt=""
        />
      </div>
      <h1>Cai gi & Ki dai</h1>
    </div>
  );
};

export default ShopByCategoryCard;
