import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FormControlLabel, Radio, TextField } from '@mui/material';
import './ThemeSetup.css'


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

      <div className='mt-3'>
        <h6 className='fw-bold mb-0'>Login Theme</h6>
        <p><small>Select the look and feel of the login page.</small></p>
        <FormControlLabel checked value="Use Color" control={<Radio />} label="Use Color" />

        <TextField
          success
          disabled
          id="outlined-error"
          defaultValue="#153AC7"
        />
      </div>

      <div className='mt-5'>
        <h6 className='fw-bold mb-0'>Where Should be the login modal?</h6>

        <div className='mt-3 d-flex gap-3'>
          <div>
            <div className='left'>
              <div className='left-child'>
              </div>
            </div>
            <FormControlLabel className='text-center'  value="Left" control={<Radio />} label="Left" />
          </div>

          <div>
            <div className='left'>
              <div className='left-child2'>
              </div>
            </div>
            <FormControlLabel className='text-center'  value="Right" control={<Radio />} label="Right" />
          </div>

          <div>
            <div className='left'>
              <div className='left-child3'>
              </div>
            </div>
            <FormControlLabel className='text-center'  value="Center" control={<Radio />} label="Center" />
          </div>

        </div>
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