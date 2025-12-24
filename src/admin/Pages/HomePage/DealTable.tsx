import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Dữ liệu mẫu phù hợp với bảng "Deal"
const rows = [
  {
    id: 1,
    image:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyzgzbxqa.jpeg?q=70',
    title: 'Summer Sale Jeans',
    category: 'Men',
    discount: '20%',
  },
  {
    id: 2,
    image:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybgnh6zn-bb.jpeg?q=70',
    title: 'Ethnic Wear Deal',
    category: 'Women',
    discount: '30%',
  },
  {
    id: 3,
    image:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/k/h/s/-original-imagnrhk2bb2gh9z.jpeg?q=70',
    title: 'Smart Electronics',
    category: 'Electronics',
    discount: '15%',
  },
  {
    id: 4,
    image:
      'https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shoe/f/6/d/8-323-8-k-footlance-multicolor-original-imafnb88tzxkx2j5.jpeg?q=70',
    title: 'Sport Shoes',
    category: 'Men',
    discount: '40%',
  },
];

export default function DealTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* Header Columns */}
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* 1. No (ID) */}
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>

              {/* 2. Image (Render thẻ img) */}
              <StyledTableCell>
                <img
                  src={row.image}
                  alt={row.title}
                  className="w-16 h-16 object-cover rounded-md" // Tailwind classes
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Fallback style
                />
              </StyledTableCell>

              {/* 3. Title */}
              <StyledTableCell>{row.title}</StyledTableCell>

              {/* 4. Category */}
              <StyledTableCell>{row.category}</StyledTableCell>

              {/* 5. Discount */}
              <StyledTableCell align="right">{row.discount}</StyledTableCell>

              {/* 6. Edit Button */}
              <StyledTableCell align="center">
                <Button variant="text" color="primary">
                  <Edit />
                </Button>
              </StyledTableCell>

              {/* 7. Delete Button */}
              <StyledTableCell align="center">
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
