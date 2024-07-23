
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx/Home';
import AboutServices from './pages/aboutServices/AboutServices';
import ServiceComponent from './component/serviceComponent/ServiceComponent';

function App() {
 
 
  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-services/:id' element={<AboutServices />}></Route>

      </Routes>
    </div>
  );
}

export default App;
