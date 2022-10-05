import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import AddClient from './components/Add-Client/Dashboard/AddClient';
import AddClientPayment from './components/Add-Client/Payment-Setup/Dashboard/AddClientPayment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/view-clients" element={<Dashboard />} />
        <Route path="/dashboard/add-client" element={<AddClient />} />
        <Route path="/dashboard/add-client/payment" element={<AddClientPayment />} />
      </Routes>
    </>
  );
}

export default App;
