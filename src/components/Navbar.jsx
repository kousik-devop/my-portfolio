import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import Slidebar from './Slidebar';

function Navbar() {
  const navigate = useNavigate();
  const [slideOpen, setSlideOpen] = React.useState(false);

  const handleContactClick = () => {
    navigate('/Contact');
  };

  return (
    <div className='sticky top-0 left-0 w-full z-50 text-white  px-7 py-4 backdrop-blur-sm relative'>
      <nav className='flex justify-between items-center'>
        <button 
          onClick={() => setSlideOpen(true)}  
          className='px-3 py-1 rounded-full border text-xs backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600 transition-colors duration-500'
        >
          Menu
        </button>

        <img className='h-8 w-8' src={logo} alt="Logo" />

        <button 
          onClick={handleContactClick} 
          className='px-3 py-1 rounded-full border text-xs  hover:bg-blue-600 hover:border-blue-600 transition-colors duration-500'
        >
          Contact
        </button>
      </nav>

      <Slidebar slideOpen={slideOpen} setSlideOpen={setSlideOpen} />
    </div>
  );
}

export default Navbar;
