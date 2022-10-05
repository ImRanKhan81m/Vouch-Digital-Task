import * as React from 'react';
import './AddClient.css'


export default function CreateProfile() {
  return (
    <React.Fragment>
      <h4 className='fw-bold'>View Clients</h4>
      <p><span className='fw-bold'>Client Master / Add Client</span> / Create Profile</p>

      <div className='d-flex justify-content-evenly mt-3'>
        <p className='profile-text'>01 CREATE PROFILE</p>
        <p>02 PAYMENT SETUP</p>
        <p>03 CREATE PROFILE</p>
        <p>04 CREATE PROFILE</p>
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
        <div>
          <input className='input-field' placeholder='Company Name' type="input" name="" />
          <input className='input-field' placeholder='Category' type="" name="" />
          <input className='input-field' placeholder='Company Email Address' type="email" name="" />
          <input className='input-field' placeholder='State' type="" name="" />
          <input className='input-field' placeholder='GST Number' type="number " name="" />
        </div>
        <div>
          <input className='input-field' placeholder='Website' type="input" name="" />
          <input className='input-field' placeholder='Select Management Company' type="" name="" />
          <input className='input-field' placeholder='Mobile Number' type="number" name="" />
          <input className='input-field' placeholder='City' type="" name="" />
          <input className='input-field' placeholder='Fax Number' type="number" name="" />
        </div>
      </div>
    </React.Fragment>
  );
}