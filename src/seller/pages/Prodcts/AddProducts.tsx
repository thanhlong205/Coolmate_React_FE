import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { AddPhotoAlternate, Close } from '@mui/icons-material';

// Imports Categories
import { mainCategory } from '../../../data/mainCategory';
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo';
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo';
import { electronicLevelTwo } from '../../../data/category/level two/electronicLevelTwo';
import { menLevelThree } from '../../../data/category/level three/menLevelThree';
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree';
import { electronicLevelThree } from '../../../data/category/level three/electronicLevelThree';

import { uploadToCoudinary } from '../../../Util/uploadToCoudinary';
import { colors } from '../../../data/Filter/color';
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo';
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree';
import { useAppDispatch } from '../../../State/Store';
import { createProduct } from '../../../State/seller/sellerProductSlice';

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicLevelThree,
};

const AddProducts = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const dispath = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      mrpPrice: '',
      sellingPrice: '',
      quantity: '', // Mặc định là chuỗi rỗng để hiện placeholder
      color: '',
      images: [],
      category: '',
      category2: '',
      category3: '',
      sizes: '',
    },
    onSubmit: (values) => {
      // 1. Chuẩn bị dữ liệu: Ép kiểu số cho các trường quan trọng
      const requestData = {
        ...values,
        // Nếu quantity rỗng hoặc chưa nhập -> Gửi số 0
        quantity: values.quantity ? Number(values.quantity) : 0,

        // Tương tự với giá tiền
        mrpPrice: values.mrpPrice ? Number(values.mrpPrice) : 0,
        sellingPrice: values.sellingPrice ? Number(values.sellingPrice) : 0,
      };

      console.log('Dữ liệu sau khi xử lý:', requestData); // Xem log này sẽ thấy quantity là số (màu xanh/tím)

      // 2. Gửi đi
      dispath(
        createProduct({
          request: requestData, // Gửi requestData đã xử lý, KHÔNG gửi values gốc
          jwt: localStorage.getItem('jwt'),
        })
      );
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const image = await uploadToCoudinary(file);
    formik.setFieldValue('images', [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  const childCategory = (category: any[], parentCategoryId: any) => {
    if (!category) return [];
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center bg-white/50">
                  <CircularProgress />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative" key={index}>
                  <img
                    className="w-24 h-24 object-cover rounded-md"
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    <Close sx={{ fontSize: '1rem' }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_price"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {colors.map((color, index) => (
                  <MenuItem value={color.name} key={index}>
                    <div className="flex gap-3">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === 'White' ? 'border' : ''
                        }`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Sizes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >
                {mainCategory.map((item) => (
                  <MenuItem key={item.categoryId} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category2 && Boolean(formik.errors.category2)
              }
              required
            >
              <InputLabel id="category2-label">Sub Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Sub Category"
              >
                {formik.values.category &&
                  categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.category2 && formik.errors.category2 && (
                <FormHelperText>{formik.errors.category2}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
              required
            >
              <InputLabel id="category3-label">Sub Category 2</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Sub Category 2"
              >
                {formik.values.category &&
                  formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  ).map((item: any) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.category3 && formik.errors.category3 && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              sx={{ p: '14px' }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              {false ? <CircularProgress size="small" /> : 'Add Product'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProducts;
