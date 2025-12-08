import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Storefront } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/mainCategory';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  // Mặc định chọn 'men' hoặc rỗng
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="sticky top-0 right-0 left-0 bg-white"
      onMouseLeave={() => setShowCategorySheet(false)}
    >
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
            <h1 className="logo cursor-pointer text-lg md:text-1xl text-primary-color">
              CoolMate
            </h1>
          </div>

          <ul className="flex items-center font-medium text-gray-800">
            {mainCategory.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => {
                  setShowCategorySheet(true); //day roi hehe
                  setSelectedCategory(item.categoryId || 'men'); //
                }}
                className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-1 lg:gap-6 items-center">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button
            sx={{ bgcolor: 'lightBlue', color: blue[900] }}
            variant="contained"
          >
            Login
          </Button>
          <IconButton>
            <FavoriteBorderIcon sx={{ fontSize: 29 }} />
          </IconButton>
          <IconButton>
            <AddShoppingCartIcon sx={{ fontSize: 29 }} />
          </IconButton>
          {isLarge && (
            <Button
              startIcon={<Storefront />}
              sx={{ bgcolor: 'lightBlue' }}
              variant="outlined"
            >
              Become seller
            </Button>
          )}
        </div>
      </div>
      {showCategorySheet && (
        <div
          onMouseLeave={() => setShowCategorySheet(false)}
          onMouseEnter={() => setShowCategorySheet(true)}
          className="categorySheet absolute top-[4.41rem] left-0 right-0 border-b bg-white shadow-lg"
        >
          <CategorySheet selectedCategory={selectedCategory} />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
