import React, { useState } from 'react';
import "../style/Menu.css";
import menuletter from "../assets/HeaderImages/Menu.png";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div className={`Site-interface ${isOffcanvasOpen ? 'has-offcanvas' : ''}`}>
      <Nav onToggle={toggleOffcanvas} isOpen={isOffcanvasOpen} />
      <Offcanvas isOpen={isOffcanvasOpen} onToggle={toggleOffcanvas} />
      <ToggleCircle isOpen={isOffcanvasOpen} />
    </div>
  );
};

const Nav = ({ onToggle, isOpen }) => (
  <div className="nav-row row">
    <button className={`hamburger-toggle ${isOpen ? 'open' : ''}`} onClick={onToggle}>
      <span className="hamburger-menu fixed lg:mr-24 mr-12 lg:mt-12 mt-10 ">
        <span className="line line--top bg-black"></span>
        <span className="line line--middle bg-black"></span>
        <span className="line line--bottom bg-black"></span>
      </span>
    </button>
  </div>
);

const Offcanvas = ({ isOpen, onToggle }) => (
  <div className={`offcanvas lg:left-[200px] left-0 ${isOpen ? 'open' : ''}`}>
    <div className="flex space-x-10">
      <div className="image">
        <img className='mt-5' src={menuletter} alt="Menu" />
      </div>
      <div className="font-Outfit">
        <h1 className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/' onClick={onToggle}>Home</NavLink>
        </h1>
        <h1 className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/about' onClick={onToggle}>About</NavLink>
        </h1>
        <h1 className={`transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/portfolio' onClick={onToggle}>Portfolio</NavLink>
        </h1>
        <h1 className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/services' onClick={onToggle}>Services</NavLink>
        </h1>
        <h1 className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/courses' onClick={onToggle}>Courses</NavLink>
        </h1>

        <h1 className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/insight' onClick={onToggle}>Insight</NavLink>
        </h1>
        <h1 className={`transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink to='/contact' onClick={onToggle}>Contact</NavLink>
        </h1>
      </div>
    </div>

    <div className="info text-[18px] absolute left-[900px] top-[400px] space-y-5">
      <h1 className="border-b-2 border-red-500 pb-3 inline-block w-[200px]">rankone@gmail.com</h1>
      <h1 className="border-b-2 border-red-500 pb-3 inline-block w-[200px]">123654789</h1>
      <h1 className="location inline-block w-[250px]">Old Baneshor, Kumari Bank</h1>
    </div>

  </div>
);

const ToggleCircle = ({ isOpen }) => (
  <div className="toggle-circle lg:mr-[103px] mr-7 lg:mt-5 mt-4">
    <div className="row">
      <svg className="hamburger-toggle__circle" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" />
      </svg>
    </div>
  </div>
);

export default Menu;
