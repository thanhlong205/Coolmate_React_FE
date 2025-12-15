import { ElectricBolt } from '@mui/icons-material';
import { Avatar, Box, Grid } from '@mui/material';
import { teal } from '@mui/material/colors';
import React from 'react';

const OrderItem = () => {
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer">
      <div className="flex items-center gap-4 mb-4 pb-3 border-b border-gray-100">
        <Avatar
          variant="rounded"
          sx={{ bgcolor: teal[50], color: teal[600], width: 40, height: 40 }}
        >
          <ElectricBolt fontSize="small" />
        </Avatar>

        <div>
          <h1 className="font-bold text-teal-600 text-sm">PENDING DELIVERY</h1>
          <p className="text-xs text-gray-500">Arriving By Mon, 15 November</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md border border-gray-200"
            src="https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_1.jpg?aio=w-1100"
            alt="Product"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-gray-800 text-base line-clamp-1">
              Áo Polo Thể Thao Promax-S1
            </h1>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              Chất liệu polyester Quick-Dry, nhẹ, thoáng khí, nhanh khô...
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-600">
              Size: FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
