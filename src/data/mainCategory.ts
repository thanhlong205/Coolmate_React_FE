import CategoryGrid from '../customer/pages/Home/CategoryGrid/CategoryGrid';
import { Level } from './../../node_modules/html-entities/dist/commonjs/index.d';
export const mainCategory = [
  {
    name: 'Men',
    CategoryId: 'men',
    level: 1,
    levelTwoCategory: [
      {
        name: 'Áo Thun Nam',
        categoryId: 'men_topWear',
        parentCategoryId: 'men',
        level: 2,
      },
      {
        name: 'BottomWear',
        categoryId: 'menBottomWear',
        parentCategoryId: 'men',
        level: 2,
      },
      {
        name: 'Áo Sơ Mi Nam',
        categoryId: 'men_innerWear_and_sleepwear',
        parentCategoryId: 'men',
        level: 2,
      },
      {
        name: 'Footwear',
        categoryId: 'men_footwear',
        parentCategoryId: 'men',
        level: 2,
      },
    ],
  },
  {
    name: 'women',
    categoryId: 'women',
    Level: 1,
    levelTwoCategory: [
      {
        parentCategoryId: 'women',
        level: 2,
        name: 'Indian & Fusion Wear',
        categoryId: 'women_indian_and_fusion_wear',
      },
      {
        parentCategoryId: 'women',
        level: 2,
        name: 'Western Wear',
        categoryId: 'women_western_wear',
      },
    ],
  },
  {
    name: 'Home & Furniture',
    categoryId: 'home_and_furniture',
    level: 1,
  },
  {
    name: 'Electronics',
    categoryId: 'electronics',
    level: 1,
  },
];
