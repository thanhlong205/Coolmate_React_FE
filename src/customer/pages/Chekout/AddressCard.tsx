import React from 'react';
import Checkout from './Checkout';
import { Radio } from '@mui/material';

const AddressCard = () => {
  const handleChang = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex  ">
      <div>
        <Radio
          checked={true}
          onChange={handleChang}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>CoolMate</h1>
        <p className="w-[320px]">Hoa Hai,phuong Ngu Hanh Son, Da Nang</p>
        <p>
          <strong>Mobile: 0888.354.357</strong>
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
