import { Delete } from '@mui/icons-material';
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 1 }}>
          <Box display="flex" justifyContent="center">
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: '#9155FD' }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 11 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Thanh Long</p>
              <p className="opacity-70 text-sm">April 11, 2025</p>
            </div>
            <Rating value={4.5} precision={0.5} name="half-rating" readOnly />
            <p>
              Sản phẩm chất lượng tốt, vải mát, giao hàng nhanh. Rất hài lòng!
            </p>
            <div>
              <img
                className="w-24 h-24 object-cover"
                src="https://n7media.coolmate.me/uploads/October2025/ao-thun-nam.jpg?aio=w-713"
                alt=""
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
