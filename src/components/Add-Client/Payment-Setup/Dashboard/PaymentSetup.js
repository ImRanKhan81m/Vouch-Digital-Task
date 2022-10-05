import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';


export default function PaymentSetup() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/dashboard/add-client/theme-setup')
  }
  return (
    <React.Fragment>
      <h4 className='fw-bold'>View Clients</h4>
      <p><span className='fw-bold'>Client Master / Add Client</span> / Create Profile</p>

      <div className='d-flex justify-content-evenly mt-3'>
        <p className='mb-0'><CheckCircleIcon className='text-success'/> CREATE PROFILE</p>
        <p className='profile-text'>02 PAYMENT SETUP</p>
        <p>03 Theme Setup</p>
        <p>04 Modules Setup</p>
      </div>

      <div>
        <h5 className='fw-bold mb-0 mt-3'>Payment Setup</h5>
        <p><small>Set up payments for the client</small></p>
      </div>

      <input className='input-field  mt-4' placeholder='Billing Address' type="input" name="" />
      <div className='d-flex gap-3'>
        <div className='first-input'>
          <input className='input-field' placeholder='Select State' type="input" name="" />
          <input className='input-field' placeholder='Select Number of Site Access' type="" name="" />
          <input className='input-field' placeholder='Discount (%)' type="email" name="" />

          <div className='mt-2'>
            <h5 className='fw-bold '>Payment Mode</h5>
            <div className='d-flex gap-4'>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2 '>UPI</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2 '>Net Banking</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2'>Cash</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2 '>Cheque</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2'>Other</span>
              </div>
            </div>
          </div>
        </div>
        <div className='second-input'>
          <input className='input-field' placeholder=' City' type="input" name="" />
          <input className='input-field' placeholder='Rs. Payable Amount per Site *' type="" name="" />
          <input className='input-field' placeholder='Reason *' type="number" name="" />

          <div className='mt-2'>
            <h5 className='fw-bold '>Payment Status</h5>
            <div className='d-flex gap-4'>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2 '>Paid</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-2 '>Pending</span>
              </div>
            </div>
          </div>
        </div>
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