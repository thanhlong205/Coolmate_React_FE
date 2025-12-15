import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { teal } from '@mui/material/colors';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { colors } from '../../../data/Filter/color';
import { price } from '../../../data/Filter/price';
import { discount } from '../../../data/Filter/discount';

const FilterSection = () => {
  // State để đóng mở xem thêm màu sắc
  const [expendColor, setExpendColor] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };
  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  const clearAllFilters = () => {
    console.log('clearAllFilters', searchParams);
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="text-teal-600 cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>

      <Divider />

      <div className="px-9 py-4">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: teal[500],
                pb: '14px',
              }}
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors
                .slice(0, expendColor ? colors.length : 5)
                .map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item.name}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: teal[600],
                          '&.Mui-checked': { color: teal[600] },
                        }}
                      />
                    }
                    label={
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded-full ${
                            item.name === 'White'
                              ? 'border border-gray-300'
                              : ''
                          }`}
                          style={{ backgroundColor: item.hex }}
                        ></span>
                        {/* tenmau */}
                        <p className="text-gray-700">{item.name}</p>
                      </div>
                    }
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <div>
            <Button
              onClick={handleColorToggle}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex item-center"
            >
              {expendColor ? 'hide' : `+${colors.length - 5} more`}
            </Button>
          </div>
        </section>

        {/*section 2 */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: teal[600],
                pb: '14px',
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              onChange={updateFilterParams}
              aria-labelledby="price"
              defaultValue=""
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />
        {/* {section 3} */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: teal[600],
                pb: '14px',
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              onChange={updateFilterParams}
              aria-labelledby="brand"
              defaultValue=""
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
