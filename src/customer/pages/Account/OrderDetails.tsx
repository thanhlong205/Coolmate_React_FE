import { Box, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import { Payment } from '@mui/icons-material';

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={
            'https://n7media.coolmate.me/uploads/April2025/ao-polo-nam-the-thao-promax-s1-Be_Xam_1.jpg?aio=w-1100'
          }
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{'Áo Polo Nam Thể Thao Promax-S1'}</h1>
          <p>
            {' Chất liệu polyester Quick-Dry, nhẹ, thoáng khí, nhanh khô...'}
          </p>
          <p>
            <strong>Size:</strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>

      <section className="border p-5">
        <OrderStepper orderStatus={'SHIPPED'} />
      </section>

      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{'CoolMate'}</p>
            <Divider flexItem orientation="vertical" />
            <p>{'0888.354.357'}</p>
          </div>

          <p>Ngu Hanh Son, TP.Da Nang - 200527</p>
        </div>
      </div>

      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{' '}
              <span className="text-green-500 font-medium text-xs">
                {690}.000
              </span>
              on this item
            </p>
          </div>
          <p className="font-medium">{799}.000</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payment />
            <p>Pay On Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong>
            {'Áo Polo Nam Thể Thao Promax-S1'}
          </p>
        </div>

        <div className="p-10">
          <Button
            disabled={false}
            // onClick={handleCancelOrder}
            color="error"
            sx={{ py: '0.7rem' }}
            className=""
            variant="outlined"
            fullWidth
          >
            {false ? 'order cancelled' : 'Cancel Order'}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
