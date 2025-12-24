import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import BecomeSellerFromStep1 from './BecomeSellerFromStep1';
import { useFormik } from 'formik';
import BecomeSellerFromStep2 from './BecomeSellerFromStep2';
import BecomeSellerFromStep3 from './BecomeSellerFromStep3';
import BecomeSellerFromStep4 from './BecomeSellerFromStep4';

const steps = [
  'Tax Details & Mobile',
  'Pickup Address',
  'Bank Details',
  'Supplier Details',
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleCreateAccount();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCreateAccount = () => {
    console.log('Create account logic here...');
  };

  const formik = useFormik({
    initialValues: {
      mobile: '',
      otp: '',
      gstin: '',

      // Địa chỉ lấy hàng
      pickupAddress: {
        name: '',
        mobile: '',
        pincode: '',
        address: '',
        locality: '',
        city: '',
        state: '',
      },

      //Tài khoản ngân hàng
      bankDetails: {
        accountNumber: '',
        ifscCode: '',
        accountHolderName: '',
      },

      sellerName: '',
      email: '',

      //Thông tin doanh nghiệp
      businessDetails: {
        businessName: '',
        businessEmail: '',
        businessMobile: '',
        logo: '',
        banner: '',
        businessAddress: '',
      },

      password: '',
    },

    onSubmit: (values) => {
      console.log('Formik Submitted:', values);
    },
  });

  return (
    <div className="p-5">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <section className="mt-20 space-y-10">
        <div>
          {activeStep == 0 ? (
            <BecomeSellerFromStep1 formik={formik} />
          ) : activeStep == 1 ? (
            <BecomeSellerFromStep2 formik={formik} />
          ) : activeStep == 2 ? (
            <BecomeSellerFromStep3 formik={formik} />
          ) : (
            <BecomeSellerFromStep4 formik={formik} />
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            onClick={handleBack}
            variant="outlined"
            disabled={activeStep === 0} //k duoc khi o b1
          >
            Back
          </Button>

          <Button onClick={handleNext} variant="contained">
            {activeStep === steps.length - 1 ? 'Create Account' : 'Continue'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
