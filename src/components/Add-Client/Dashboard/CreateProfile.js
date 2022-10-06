import * as React from 'react';
import './AddClient.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useNavigate } from 'react-router-dom';


export default function CreateProfile() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/dashboard/add-client/payment')
  }

  return (
    <React.Fragment>
      <h4 className='fw-bold'>Add Client</h4>
      <p><span className='fw-bold'>Client Master / Add Client</span> / Create Profile</p>

      <div className='d-flex justify-content-evenly mt-3'>
        <p className='profile-text'>01 CREATE PROFILE</p>
        <p>02 PAYMENT SETUP</p>
        <p>03 Theme Setup</p>
        <p>04 Modules Setup</p>
      </div>

      <div>
        <h5 className='fw-bold mb-0 mt-3'>Create Client Profile</h5>
        <p><small>Add some basic information related to the client</small></p>
      </div>

      <div className='d-flex gap-3 align-items-center'>
        <div>
          <input disabled className='profile-input' type="" name="" placeholder='+' />
        </div>
        <div>
          <h5 className='mb-0 fw-bold'>Company Logo</h5>
          <p className='mb-0'><small>Logo ratio should be 1:1 and should be 120px X 120 px</small></p>
        </div>
      </div>

      <div className='d-flex gap-3 mt-4'>
        <div className='first-input'>
          <input className='input-field' placeholder='Company Name' type="input" name="" />
          <input className='input-field' placeholder='Category' type="" name="" />
          <input className='input-field' placeholder='Company Email Address' type="email" name="" />
          <input className='input-field' placeholder='State' type="" name="" />
          <input className='input-field' placeholder='GST Number' type="number " name="" />
        </div>
        <div className='second-input'>
          <input className='input-field' placeholder='Website' type="input" name="" />
          <input className='input-field' placeholder='Select Management Company' type="" name="" />
          <input className='input-field' placeholder='Mobile Number' type="number" name="" />
          <input className='input-field' placeholder='City' type="" name="" />
          <input className='input-field' placeholder='Fax Number' type="number" name="" />
        </div>
      </div>

      <div className='mt-4 d-flex gap-5 mb-5'>
        <div onClick={handleNavigate}>
          <span className='profile-save'>Save & Continue <KeyboardArrowRightIcon /></span>
        </div>
        <div className='reset'> <RestartAltIcon /> Reset</div>
      </div>
    </React.Fragment>
  );
}