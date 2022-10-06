import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextField } from '@mui/material';
import Brightness1SharpIcon from '@mui/icons-material/Brightness1Sharp';


export default function ThemeSetup() {
  return (
    <React.Fragment>
      <h4 className='fw-bold'>View Clients</h4>
      <p><span className='fw-bold'>Client Master / Add Client</span> / Create Profile</p>

      <div className='d-flex justify-content-evenly mt-3'>
        <p className='mb-0'><CheckCircleIcon className='text-success' /> CREATE PROFILE</p>
        <p ><CheckCircleIcon className='text-success' /> 02 PAYMENT SETUP</p>
        <p className='profile-text'>03 Theme Setup</p>
        <p>04 Modules Setup</p>
      </div>

      <div>
        <h5 className='fw-bold mb-0 mt-3'>Theme Setup</h5>
        <p><small>Add information about the client to give them a personalized experience.</small></p>
      </div>

      <div className='mt-4'>
        <TextField
          className='textField'
          success
          id="outlined-error"
          label="Primary Color"
          defaultValue="#153AC7"
        />
        <p><small>Add Hex Value</small></p>
      </div>




      <div className='mt-5 d-flex gap-5 mb-5'>
        <div>
          <span className='profile-save'>Save & Continue <KeyboardArrowRightIcon /></span>
        </div>
        <div className='reset'> <RestartAltIcon /> Reset</div>
      </div>
    </React.Fragment>
  );
}