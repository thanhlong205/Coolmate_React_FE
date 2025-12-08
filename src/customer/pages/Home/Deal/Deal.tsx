import React from 'react';
import DealCard from './DealCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Deal = () => {
  // Chình slider ds sp
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // h.thị 5 sp
    slidesToScroll: 1, // Trượt từg cái
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative section-deal">
      <div className="py-10 lg:px-20 container mx-auto">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Sản phẩm nổi bật / Deal sốc
        </h2>

        <Slider {...settings}>
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            //kcah thẻ
            <div key={index} className="px-2">
              <DealCard />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deal;
