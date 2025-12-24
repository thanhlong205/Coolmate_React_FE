import React from 'react';
import { TextField } from '@mui/material';

interface BecomeSellerFromStep2Props {
  formik: any;
}

const BecomeSellerFromStep4: React.FC<BecomeSellerFromStep2Props> = ({
  formik,
}) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="businessDetails.businessName"
        label="Business Name"
        value={formik.values.businessDetails.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.businessDetails?.businessName &&
          Boolean(formik.errors.businessDetails?.businessName)
        }
        helperText={
          formik.touched.businessDetails?.businessName &&
          formik.errors.businessDetails?.businessName
        }
      />

      {/* Seller Name Field */}
      <TextField
        fullWidth
        name="sellerName"
        label="Seller Name"
        value={formik.values.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
        helperText={formik.touched.sellerName && formik.errors.sellerName}
      />

      {/* Nếu form của bạn còn Email và Password ở bước này thì thêm vào dưới đây */}

      <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
    </div>
  );
};

export default BecomeSellerFromStep4;
