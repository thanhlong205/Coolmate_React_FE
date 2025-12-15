import React from 'react';
import ReviewCard from './ReviewCard';
import { Divider } from '@mui/material';

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_3.jpg?aio=w-1100"
          alt=""
          className="w-full h-auto object-cover"
        />
        <div>
          <div>
            <p className="font-bold text-xl">Virani Clothing</p>
            <p className="text-lg text-gray-600">Áo Polo Nam Thể Thao</p>
          </div>
          <div className="price flex items-baseline gap-2 mt-5 text-2xl">
            <span className="font-bold text-gray-900">400.000đ</span>
            <span className="text-xs text-gray-400 line-through decoration-1">
              999.000đ
            </span>
            <span className="text-primary-color font-bold text-xs">-60%</span>
          </div>
        </div>
      </section>

      <section className="flex-1 space-y-5">
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <div key={index} className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
