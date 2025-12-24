import { TextField, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
// 1. Đổi tên action bằng từ khóa 'as' để tránh trùng lặp với bất kỳ hàm nào khác

import { useNavigate } from 'react-router-dom'; // Nếu bạn muốn chuyển trang
import { sellerLogin } from '../../../State/seller/sellerAuthSlice';
import { sendLoginSignupOtp } from '../../../State/AuthSlice';

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, otpSent, jwt, error } = useAppSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
    },
    onSubmit: (values) => {
      // 2. Gọi action đã được đổi tên
      console.log('Đang gửi login...', values);
      dispatch(sellerLogin(values));
    },
  });

  const handleSendOtp = () => {
    if (formik.values.email) {
      dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    } else {
      alert('Vui lòng nhập email!');
    }
  };

  useEffect(() => {
    if (jwt) {
      console.log('Login Success!');
      // Chuyển hướng nếu cần, ví dụ: navigate('/seller/dashboard');
    }
  }, [jwt]);

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-center font-bold text-2xl text-[#299bc8]">
          Login As Seller
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={otpSent}
          />

          {!otpSent && (
            <Button
              fullWidth
              variant="outlined"
              onClick={handleSendOtp}
              disabled={loading}
              sx={{ borderColor: '#299bc8', color: '#299bc8' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Send OTP'}
            </Button>
          )}

          {otpSent && (
            <div className="space-y-2">
              <p className="text-green-600 text-xs font-bold">✓ OTP sent!</p>
              <TextField
                fullWidth
                name="otp"
                label="Enter OTP"
                value={formik.values.otp}
                onChange={formik.handleChange}
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-center text-sm">
              {typeof error === 'string' ? error : 'Login Failed'}
            </p>
          )}

          {otpSent && (
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                py: 1.5,
                bgcolor: '#299bc8',
                '&:hover': { bgcolor: '#207b9f' },
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SellerLoginForm;
