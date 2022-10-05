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
          <input className='profile-input' type="" name="" placeholder='+' />
        </div>
        <div>
          <h5 className='mb-0 fw-bold'>Company Logo</h5>
          <p className='mb-0'><small>Logo ratio should be 1:1 and should be 120px X 120 px</small></p>
        </div>
      </div>
    </React.Fragment>
  );
}