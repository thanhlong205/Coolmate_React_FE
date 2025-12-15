import React from 'react';

const SimilarProductCard = () => {
  return (
    <div>
      {' '}
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src={
              'https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_3.jpg?aio=w-1100'
            }
            alt=""
          />
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h3 className="text-sm font-medium text-gray-700 line-clamp-2 cursor-pointer group-hover:text-blue-600 transition-colors">
              Áo Polo Nam Thể Thao Promax
            </h3>
          </div>
          <div className="price flex items-baseline gap-2 mt-1">
            <span className="font-bold text-gray-900">400.000đ</span>

            <span className="text-xs text-gray-400 line-through decoration-1">
              999.000đ
            </span>

            <span className="text-primary-color font-bold text-xs">-60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
