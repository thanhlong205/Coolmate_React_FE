export const mainCategory = [
  {
    name: 'Men',
    categoryId: 'men', // Đã sửa thành chữ c thường
    level: 1,
    // Dữ liệu levelTwoCategory ở đây chỉ để tham khảo hoặc dùng cho mobile menu.
    // Navbar desktop sẽ dùng dữ liệu từ file menLevelTwo.js riêng.
    levelTwoCategory: [
      {
        name: 'Top Wear',
        categoryId: 'men_topWear', // ID khớp với file menLevelTwo
        parentCategoryId: 'men',
        level: 2,
      },
      {
        name: 'Bottom Wear',
        categoryId: 'men_bottomWear',
        parentCategoryId: 'men',
        level: 2,
      },
      {
        name: 'Innerwear',
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
    name: 'Women',
    categoryId: 'women',
    level: 1,
    levelTwoCategory: [
      {
        name: 'Top Wear',
        categoryId: 'women_topWear',
        parentCategoryId: 'women',
        level: 2,
      },
      {
        name: 'Bottom Wear',
        categoryId: 'women_bottomWear',
        parentCategoryId: 'women',
        level: 2,
      },
      {
        name: 'Innerwear',
        categoryId: 'women_innerWear_and_sleepwear',
        parentCategoryId: 'women',
        level: 2,
      },
    ],
  },
  {
    name: 'Kids',
    categoryId: 'kids',
    level: 1,
    levelTwoCategory: [
      {
        name: 'Boys',
        categoryId: 'kids_boys',
        parentCategoryId: 'kids',
        level: 2,
      },
      {
        name: 'Girls',
        categoryId: 'kids_girls',
        parentCategoryId: 'kids',
        level: 2,
      },
    ],
  },
  {
    name: 'CM24 (Care)',
    categoryId: 'care', // Danh mục Chăm sóc cá nhân
    level: 1,
    levelTwoCategory: [
      {
        name: 'Shaving',
        categoryId: 'care_shaving',
        parentCategoryId: 'care',
        level: 2,
      },
    ],
  },
  {
    name: 'C&S',
    categoryId: 'cs', // ID ngắn gọn để map dữ liệu
    level: 1,
    levelTwoCategory: [
      {
        name: 'Programs',
        categoryId: 'cs_programs',
        parentCategoryId: 'cs',
        level: 2,
      },
    ],
  },
];
