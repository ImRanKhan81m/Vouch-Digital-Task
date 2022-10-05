import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
      <ListItemButton className='view-client'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText className='client-text' >View Clients</ListItemText>
      </ListItemButton>

    <Link to='/dashboard/add-client'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText className='client-text' primary="Add Client" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
