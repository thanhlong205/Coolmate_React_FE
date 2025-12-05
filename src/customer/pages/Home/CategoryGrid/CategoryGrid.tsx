import React from 'react';

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white overflow-hidden rounded-xl relative">
        <img
          className="w-full h-full object-cover object-top transform transition duration-500 hover:scale-105"
          src="https://n7media.coolmate.me/uploads/September2025/pro_nu_Frame_88041_(2)-min.jpg?aio=w-1069"
          alt="Women's collection"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="col-span-2 row-span-6 text-white overflow-hidden rounded-xl relative">
        <img
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          src="https://n7media.coolmate.me/uploads/September2025/pro_nam_Frame_88042_(2)-min.jpg?aio=w-1069"
          alt="Men's essentials"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="col-span-4 row-span-6 text-white overflow-hidden rounded-xl relative">
        <img
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          src="https://n7media.coolmate.me/uploads/September2025/pro_nam_Frame_88042_(2)-min.jpg?aio=w-1069"
          alt="New arrivals"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="col-span-3 row-span-12 text-white overflow-hidden rounded-xl relative">
        <img
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          src="https://n7media.coolmate.me/uploads/October2025/mceclip5_86.jpg"
          alt="Featured look"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="col-span-6 row-span-6 text-white overflow-hidden rounded-xl relative">
        <img
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          src="https://n7media.coolmate.me/uploads/March2025/mceclip35.png?aio=w-585"
          alt="Seasonal picks"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default CategoryGrid;
