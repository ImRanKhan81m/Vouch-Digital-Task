import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
