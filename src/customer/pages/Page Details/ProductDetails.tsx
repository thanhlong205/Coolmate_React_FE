import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Divider, Button } from '@mui/material';
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from '@mui/icons-material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_1.jpg?aio=w-1100"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_1.jpg?aio=w-1100"
              alt=""
            />
          </div>
        </section>

        <section className="">
          <h1 className="font-bold text-lg text-primary-color">
            Áo Polo Nam Thể Thao Promax
          </h1>
          <p className="text-gray-500 font-semibold">Thoáng khí</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 pt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: '17px' }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>235 Rating</span>
          </div>

          <div className="price flex items-baseline gap-2 mt-5 text-2xl">
            <span className="font-bold text-gray-900">400.000đ</span>

            <span className="text-xs text-gray-400 line-through decoration-1">
              999.000đ
            </span>

            <span className="text-primary-color font-bold text-xs">-60%</span>
          </div>

          <p className="text-sm">
            Quick-dry material, perfect for humid weather.
          </p>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Coolmate - Authentic & Quality Assured.</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee.</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns.</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available.</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>QUANTIRY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: '1rem' }}
            >
              Add To Bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: '1rem' }}
            >
              WhishList
            </Button>
          </div>

          <div className="mt-5">
            <p>
              Áo Polo Nam Thể Thao Promax-S1 kết hợp thiết kế thanh lịch với
              công nghệ thể thao hiện đại. Chất liệu 100% polyester được xử lý
              Quick-Dry và Wicking giúp thấm hút nhanh, khô thoáng tối đa. Với
              trọng lượng nhẹ chỉ 155gsm và bề mặt vải có lỗ thoáng khí, áo mang
              lại cảm giác dễ chịu khi vận động. Đây là lựa chọn hoàn hảo cho
              những ai tìm kiếm một chiếc áo polo thể thao nam hiệu suất cao.
            </p>
          </div>
          <div className="mt-7 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
