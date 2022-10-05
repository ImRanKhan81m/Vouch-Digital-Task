import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to='/dashboard/view-clients'>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText className='client-text' primary="View Clients" />
      </ListItemButton>
    </Link>

    <ListItemButton className='add-clients'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText className='client-text' primary="Add Client" />
    </ListItemButton>
  </React.Fragment>
);