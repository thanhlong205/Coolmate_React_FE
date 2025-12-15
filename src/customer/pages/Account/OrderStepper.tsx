import { CheckCircle, FiberManualRecord } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const steps = [
  { name: 'Order Placed', description: 'on Thu, 11 Nov', value: 'PLACED' },
  {
    name: 'Packed',
    description: 'Item Packed in Dispatch Warehouse',
    value: 'CONFIRM',
  },
  { name: 'Shipped', description: 'by Mon, 15 Nov', value: 'SHIPPED' },
  { name: 'Arriving', description: 'by 16 Nov - 18 Nov', value: 'ARRIVING' },
  { name: 'Arrived', description: 'by 16 Nov - 18 Nov', value: 'DELIVERED' },
];

const canceledStep = [
  { name: 'Order Placed', description: 'on Thu, 11 Nov', value: 'PLACED' },
  { name: 'Order Canceled', description: 'on Thu, 11 Nov', value: 'CANCELLED' },
];

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  // 👇 GÁN CỨNG BẰNG 2 NHƯ Ý BẠN MUỐN TEST
  const activeStep = 2;

  useEffect(() => {
    if (orderStatus === 'CANCELLED') {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="mx-auto my-10 px-5">
      {statusStep.map((step, index) => (
        <div key={index} className="flex px-4">
          {/* Cột Trái: Icon + Line */}
          <div className="flex flex-col items-center">
            <Box
              sx={{ zIndex: 1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                index <= activeStep
                  ? 'bg-gray-200 text-teal-500'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step.value === orderStatus || index <= activeStep ? (
                <CheckCircle />
              ) : (
                <FiberManualRecord />
              )}
            </Box>

            {/* Đường kẻ nối */}
            {statusStep.length - 1 != index && (
              <div
                className={`h-20 w-[2px] ${
                  index < activeStep ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>

          {/* Cột Phải: Text (Phần này thêm vào để hiện chữ) */}
          <div className="ml-5 w-full pt-1">
            <div
              className={`${step.value === orderStatus ? 'bg-blue-500 p-2 text-white font-medium rounded-md -translate-y-3' : ''}
           ${orderStatus === 'CANCELLED' && step.value === orderStatus ? 'bg-red-500' : ''} w-full`}
            >
              <p className={``}>{step.name}</p>
              <p
                className={`${step.value === orderStatus ? 'text-gray-200' : 'text-gray-500'} text-xs`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;
