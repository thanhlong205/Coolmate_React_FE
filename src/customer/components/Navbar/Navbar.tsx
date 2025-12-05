import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Storefront } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import CategorySheet from './CategorySheet';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Box sx={{ zIndex: 2 }} className="sticky top-0 right-0 left-0 bg-white">
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
              {['Men', 'Women', 'Electronics', 'Home & Furniture'].map(
                (item) => (
                  <li
                    key={item}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://www.coolmate.me/images/logo.png"
                />
                <h3
                  className="font-semibold
                             hidden lg:block"
                >
                  {' '}
                  long
                </h3>
              </Button>
            ) : (
              <Button
                sx={{ bgcolor: 'lightBlue', color: blue[900] }}
                variant="contained"
              >
                Login
              </Button>
            )}
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

        <div className="categorySheet absolute top-[4.41rem] left-20 right-20 border">
          <CategorySheet />
        </div>
      </Box>
    </>
  );
};

export default Navbar;
