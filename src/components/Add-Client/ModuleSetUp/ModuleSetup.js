import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import './ModuleSetup.css'

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

      <div className='d-flex gap-5 mt-4 '>
        <div className='d-grid gap-3 checkbox-left'>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Home/Dashboard</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Helpdesk</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Assets</span>
          </div>
          <div className='task'>
            <input className='task-icon' checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Daily Tasks</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>PPM</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Employees</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Profile</span>
          </div>
          <div>
            <input checked type="checkbox" name="" id="" />
            <span className='ms-2 '>Transactions</span>
          </div>
        </div>

        <div className='checkbox-right tasks'>
          <div className='d-flex task-parent'>
            <div className='task-left'>
              <h5 className='fw-bold mb-0'>Daily Tasks</h5>
              <p className='mb-0'>Select the sub modules that the client can use.</p>
            </div>
            <div className='task-right'>
              Visible to client
            </div>
          </div>

          <div className='mt-3 d-grid gap-2'>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 fw-bold'>Show All Sub Modules</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Summery</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>View Tasks</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Create New TTask</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Logbook</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Logsheet</span>
          </div>
          <div className='ms-4'>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Daily</span>
          </div>
          <div className='ms-4'>
            <input type="checkbox" name="" id="" />
            <span className='ms-2 '>Activity Wise</span>
          </div>
          </div>
        </div>
      </div>


      <div className='mt-5 d-flex gap-5 mb-5'>
        <div onClick={handleNavigate}>
          <span className='profile-save'>Save & Continue <KeyboardArrowRightIcon /></span>
        </div>
        <div className='reset'> <RestartAltIcon /> Reset</div>
      </div>
    </React.Fragment>
  );
}