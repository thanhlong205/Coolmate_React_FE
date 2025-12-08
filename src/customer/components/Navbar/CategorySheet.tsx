import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';

import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo';
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo';
import { electronicLevelTwo } from '../../../data/category/level two/electronicLevelTwo';
import { kidsLevelTwo } from '../../../data/category/level two/furnitureLevelTwo';

import { menLevelThree } from '../../../data/category/level three/menLevelThree';
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree';
import { electronicLevelThree } from '../../../data/category/level three/electronicLevelThree';
import { kidsLevelThree } from '../../../data/category/level three/furnitureLevelThree';

const CareShareMenu = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-8 gap-10 items-center justify-center bg-gray-50">
      {/* Phần bên trái*/}
      <div className="flex-1 flex flex-col items-center text-center gap-6">
        <Typography variant="body1" className="text-gray-600 italic px-10">
          "Coolmate cam kết dành{' '}
          <span className="font-bold text-blue-600">10% doanh thu</span> từ sản
          phẩm Care & Share đóng góp vào quỹ để tổ chức các hoạt động thiện
          nguyện dành cho trẻ em có hoàn cảnh khó khăn."
        </Typography>

        {/* Sơ đồ quy trình */}
        <div className="flex items-center gap-4 my-4 opacity-80 scale-90 md:scale-100">
          <div className="flex flex-col items-center">
            <PersonIcon className="text-blue-600 !text-5xl" />
            <span className="text-xs font-bold mt-1">KHÁCH HÀNG</span>
          </div>
          <span className="text-2xl text-gray-400">+</span>
          <div className="flex flex-col items-center">
            <StorefrontIcon className="text-blue-600 !text-5xl" />
            <span className="text-xs font-bold mt-1">COOLMATE</span>
          </div>
          <span className="text-2xl text-gray-400">→</span>
          <div className="flex flex-col items-center">
            <div className="border-2 border-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 font-bold">
              10%
            </div>
            <span className="text-xs font-bold mt-1 w-20">DOANH THU</span>
          </div>
          <span className="text-2xl text-gray-400">→</span>
          <div className="flex flex-col items-center">
            <VolunteerActivismIcon className="text-red-500 !text-5xl" />
            <span className="text-xs font-bold mt-1 w-24">TRẺ EM KHÓ KHĂN</span>
          </div>
        </div>

        {/* Nút bấm chuyển hướng */}
        <Button
          variant="contained"
          className="!bg-blue-700 !rounded-full !px-8 !py-2 !text-white !normal-case"
          endIcon={<ArrowForwardIcon />}
        >
          Khám phá Care & Share
        </Button>
      </div>

      {/* Hảnh (Áo ấm cho em) */}
      <div className="w-full md:w-1/3 h-64 rounded-xl overflow-hidden shadow-lg relative">
        <img
          src="https://n7media.coolmate.me/uploads/March2025/mceclip0_226.jpg"
          alt="Care and Share"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-bold text-lg">Áo ấm cho em</p>
          <p className="text-white/80 text-xs">
            Hành trình mang yêu thương đến vùng cao
          </p>
        </div>
      </div>
    </div>
  );
};

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  care: electronicLevelTwo,
  kids: kidsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  care: electronicLevelThree,
  kids: kidsLevelThree,
};

const CategorySheet = ({ selectedCategory }: any) => {
  // Hàm lọc
  const childCategory = (category: any, parentCategoryId: any) => {
    if (!category) return [];
    return category.filter(
      (child: any) =>
        String(child.parentCategoryId) === String(parentCategoryId)
    );
  };

  // Nếu đang chọn C&S, hiển thị component ngay
  if (selectedCategory === 'cs') {
    return (
      <Box
        sx={{ zIndex: 2 }}
        className="bg-white shadow-lg lg:h-[400px] overflow-hidden w-full"
      >
        <CareShareMenu />
      </Box>
    );
  }

  // Nếu không phải C&S, hiển thị danh sách dạng lưới như bình thường
  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto w-full"
    >
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 p-6 text-sm text-black">
        {categoryTwo[selectedCategory] ? (
          categoryTwo[selectedCategory]?.map((item, idx) => {
            const subItems = childCategory(
              categoryThree[selectedCategory],
              item.categoryId
            );

            return (
              <div key={idx} className="flex flex-col">
                <p className="text-primary-color mb-3 font-bold text-base uppercase tracking-wide border-b pb-1 border-gray-100">
                  {item.name}
                </p>

                <ul className="space-y-2">
                  {subItems.map((subItem: any, subIdx: number) => (
                    <li
                      key={subIdx}
                      className="text-gray-600 hover:text-black hover:font-medium cursor-pointer transition-colors"
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        ) : (
          <div className="col-span-4 text-center py-10 text-gray-400">
            Chưa có dữ liệu cho mục: {selectedCategory}
          </div>
        )}
      </div>
    </Box>
  );
};
export default CategorySheet;
