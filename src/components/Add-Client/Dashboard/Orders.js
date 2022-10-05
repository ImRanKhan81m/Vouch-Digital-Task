import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, sites, Tenants, Group, Action) {
  return { id, date, name, shipTo, paymentMethod, amount, sites, Tenants , Group, Action};
}

const rows = [
  createData(1, 'Infosys', 'management@infosys.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 12 ,'- -','- -'),
  createData(2, 'Wipro', 'management@wipro.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 8 ,'- -','- -'),
  createData(3, 'Accenture', 'management@accenture.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 4 ,'- -','- -'),
  createData(4, 'Capgemini', 'management@capgemini.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 6 ,'- -', 24),
  createData(5, 'Lodha', 'management@lodha.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 24, 16,'- -'),
  createData(6, 'HCL', 'management@hcl.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 10 ,'- -',2),
  createData(7, 'Redington', 'management@redington.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 5, 2,31),
  createData(8, 'Mphasis', 'management@mphasis.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 1, 23,'- -'),
  createData(9, 'Larsen & Toubro', 'management@larsentoubro.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 9, '- -','- -'),
  createData(10, 'Tata Consultancy', 'management@tcs.com', '+91 9563214587', 'Abhishek Kumar'," - - ", 16 ,'- -','- -'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h4 className='fw-bold'>View Clients</h4>
      <p><span className='fw-bold'>Client Master </span>/ View Clients</p>
      {/* <Table >
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Contact Person </TableCell>
            <TableCell>Facilitator</TableCell>
            <TableCell>Sites</TableCell>
            <TableCell>Tenants</TableCell>
            <TableCell>Tenant Group</TableCell>
            <TableCell>Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell>{row.sites}</TableCell>
              <TableCell>{row.Tenants}</TableCell>
              <TableCell>{row.Group}</TableCell>
              <TableCell><MoreVertIcon  className='action'/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}