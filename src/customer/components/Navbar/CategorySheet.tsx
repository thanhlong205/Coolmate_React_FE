import React from 'react';
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo';
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo';
import { electronicLevelTwo } from '../../../data/category/level two/electronicLevelTwo';
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTrue';
import { menLevelThree } from '../../../data/category/level three/menLevelThree';
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree';
import { electronicLevelThree } from '../../../data/category/level three/electronicLevelThree';
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree';
import { Box } from '@mui/material';

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = () => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId === parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex flex-col text-sm gap-4 p-4">
        {categoryTwo['men']?.map((item, idx) => (
          <div key={idx}>
            <p className="text-primary-color mb-1 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(categoryThree['men'], item.categoryId).map(
                (item: any) => (
                  <div>
                    <li className="hover:text-neutral-500 cursor-pointer">
                      {item.name}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
