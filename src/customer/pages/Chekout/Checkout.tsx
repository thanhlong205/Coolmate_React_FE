import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 2,
};

const paymentGatewayList = [
  {
    value: 'RAZORPAY',
    image:
      'https://episyche.com/_next/image?url=https%3A%2F%2Fepisyche-blog.s3.ap-south-1.amazonaws.com%2FDjango%2FPayments%2FRazorpay%2FSetup%2F10%2Fthumbnail_image%2F8afa5831-bd9f-4d54-8373-b55b0ee22326.png&w=1200&q=75',
    label: 'Razorpay',
  },
  {
    value: 'STRIPE',
    image: 'https://vikwp.com/images/plugins/stripe.png',
    label: 'Stripe',
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [paymentGateway, setPaymentGatway] = React.useState('RAZORPAY');

  const handlePaymentChange = (event: any) => {
    setPaymentGatway(event.target.value);
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>

            <div className="text-xs font-semibold space-y-5">
              <p>Saved Addresses</p>
              <div>
                {[1, 1, 1, 1, 1].map((item, index) => (
                  <AddressCard key={index} />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-3 border p-4 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">
                  Chose Payment Gatway
                </h1>
                <FormControl component="fieldset" fullWidth>
                  <RadioGroup
                    row
                    aria-labelledby="payment-gateway-group"
                    name="payment-gateway"
                    value={paymentGateway}
                    onChange={handlePaymentChange}
                    className="flex justify-between"
                  >
                    {paymentGatewayList.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio size="small" />}
                        className={`border rounded-md px-3 py-2 w-[48%] flex items-center justify-start m-0 transition-all cursor-pointer hover:bg-gray-50 ${
                          paymentGateway === item.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                        label={
                          <div className="flex items-center h-[30px] ml-2">
                            <img
                              className="h-full object-contain"
                              src={item.image}
                              alt={item.label}
                            />
                          </div>
                        }
                        sx={{
                          width: '48%',
                          margin: 0,
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCard />

              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: '11px' }}>
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
