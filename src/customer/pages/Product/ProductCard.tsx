import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
  'https://n7media.coolmate.me/uploads/November2025/ao-polo-pkb-nam-driveshot-essentials-1-1-xam-1_1.jpg?aio=w-1100',
  'https://n7media.coolmate.me/uploads/November2025/ao-polo-pkb-nam-driveshot-essentials-1-2-xam-1_31.jpg?aio=w-1100',
  'https://n7media.coolmate.me/uploads/November2025/ao-polo-nam-pickleball-driveshot-essentials-fix_final_(12).jpg?aio=w-1100',
  'https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_1.jpg?aio=w-1100',
  'https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_4.jpg?aio=w-1100',
  'https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_5.jpg?aio=w-1100',
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearImmediate(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button
                  sx={{ bgcolor: 'white' }}
                  variant="contained"
                  color="secondary"
                >
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button
                  sx={{ bgcolor: 'white' }}
                  variant="contained"
                  color="secondary"
                >
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
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
    </>
  );
};

export default ProductCard;
