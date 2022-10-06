import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FormControlLabel, Radio, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function ModuleSetup() {
    const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/dashboard/add-client/module-setup')
  }

  return (
    <React.Fragment>
      <h4 className='fw-bold'>Add Client</h4>
      <p><span className='fw-bold'>Client Master / Add Client</span> / Module Setup</p>

      <div className='d-flex justify-content-evenly mt-3'>
        <p className='mb-0'><CheckCircleIcon className='text-success' /> CREATE PROFILE</p>
        <p ><CheckCircleIcon className='text-success' /> 02 PAYMENT SETUP</p>
        <p><CheckCircleIcon className='text-success' /> Theme Setup</p>
        <p className='profile-text'>04 Modules Setup</p>
      </div>

      <div>
        <h5 className='fw-bold mb-0 mt-3'>Module Setup</h5>
        <p><small>Select the modules that the client can use..</small></p>
      </div>


      <div className='mt-5 d-flex gap-5 mb-5'>
        <div  onClick={handleNavigate}>
          <span className='profile-save'>Save & Continue <KeyboardArrowRightIcon /></span>
        </div>
        <div className='reset'> <RestartAltIcon /> Reset</div>
      </div>
    </React.Fragment>
  );
}