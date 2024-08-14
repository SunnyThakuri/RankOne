import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../../HamburgerMenu/Menu';
import "../../style/Header.css";
import DevelopmentHover from '../ServiceWork/DevelopmentHover';
import AnimationHover from '../ServiceWork/AnimationHover';
import navlogo from "../../assets/HeaderImages/LOGO FINAL-04.png"
import ProductionHover from '../ServiceWork/ProductionHover';

import DesignHover from '../ServiceWork/DesignHover';
import { RiArrowDropDownLine } from "react-icons/ri";
import DigitalMarketingHover from '../ServiceWork/DigitalMarketingHover';

const Header = ({ locomotiveInstance }) => {
  //for service hover
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  //model_Navlink
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);
  const [productionDesignOpen, setProductionDesignOpen] = useState(false);
  const [digitalmarketingDesignOpen, setDigitalMarketingDesignOpen] = useState(false);
  const [gamedevelopmentOpen, setGameDevelopmentOpen] = useState(false);
  const [animationdesignOpen, setAnimationDesignOpen] = useState(false);

  const handleGraphicDesignOpen = () => {
    setGraphicDesignOpen(true);
  };

  const handleProductionDesignOpen = () => {
    setProductionDesignOpen(true);
  };
  const handleDigitalMarketingDesignOpen = () => {
    setDigitalMarketingDesignOpen(true);
  };
  const handleGameDevelopmentOpen = () => {
    setGameDevelopmentOpen(true);
  };

  const handleAnimationDesignOpen = () => {
    setAnimationDesignOpen(true);
  };

  const handleClose = () => {
    setGraphicDesignOpen(false);
    setProductionDesignOpen(false);
    setDigitalMarketingDesignOpen(false);
    setGameDevelopmentOpen(false);
    setAnimationDesignOpen(false);
  };


  useEffect(() => {
    if (!locomotiveInstance) return;

    const handleLocomotiveScroll = (args) => {
      const currentScrollPos = args.scroll.y;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    locomotiveInstance.on('scroll', handleLocomotiveScroll);

    return () => {
      locomotiveInstance.off('scroll', handleLocomotiveScroll);
    };
  }, [locomotiveInstance, prevScrollPos]);

  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className={`nav_bar flex fixed z-[9] w-screen top-0 justify-between lg:px-[50px]  bg-[#141414] transition-transform duration-300 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
          <div className="logo flex">
            <div className="Logo flex lg:my-5 my-3 lg:pl-10 pl-5">


              <NavLink to='/home'><img className='w-[150px] h-[47px] mt-3' src={navlogo} alt="" /></NavLink>
            </div>
          </div>

          <div className="hidden lg:block ">
            <div className="mid_itemsd flex text-white space-x-10 mt-10 pr-[80px] text-[16px] font-Outfit">
              <NavLink to='/about'><h1>About</h1></NavLink>
              <NavLink to='/portfolio'><h1>Portfolio</h1></NavLink>

              {/* Dropdown */}
              <div className="relative group">
                <div className="flex ">
                  <h1 className="cursor-pointer">Service</h1>
                  <div className="text-[30px]">
                    <RiArrowDropDownLine />
                  </div>
                </div>

                <div className="absolute w-[176px] hidden group-hover:block bg-[#2D2C2E]   p-2 rounded-lg shadow-lg space-y-1 font-Outfit">

                  <div onClick={handleGraphicDesignOpen} className=" py-2 hover:bg-[#002AF7] border-b-[0.5px] border-b-[#585858] cursor-pointer">
                    <h1 className='px-4'>Brand & Design</h1>
                  </div>
                  <div onClick={handleGameDevelopmentOpen} className=" py-2 hover:bg-[#002AF7] border-b-[0.5px] border-b-[#585858] cursor-pointer">
                    <h1 className='px-4'>Developent</h1>
                  </div>
                  <div onClick={handleAnimationDesignOpen} className=" py-2 hover:bg-[#002AF7] border-b-[0.5px] border-b-[#585858] cursor-pointer">
                    <h1 className='px-4'>Animation</h1>
                  </div>
                  <div onClick={handleProductionDesignOpen} className=" py-2 hover:bg-[#002AF7] border-b-[0.5px] border-b-[#585858] cursor-pointer">
                    <h1 className='px-4'>Production</h1>
                  </div>
                  <div onClick={handleDigitalMarketingDesignOpen} className=" py-2 hover:bg-[#002AF7] border-b-[0.5px] border-b-[#585858] cursor-pointer">
                    <h1 className='px-4'>Digtial Marketing</h1>
                  </div>
                </div>
              </div>

              <NavLink to='/courses'><h1>Courses</h1></NavLink>
              <NavLink to='/insight'><h1>Insight</h1></NavLink>
              <NavLink to='/contact'><h1>Contact</h1></NavLink>
            </div>
          </div>

          <div className="">
            <Menu />
          </div>
        </div>

        <AnimationHover open={animationdesignOpen} handleClose={handleClose} />
        <DesignHover open={graphicDesignOpen} handleClose={handleClose} />
        <DevelopmentHover open={gamedevelopmentOpen} handleClose={handleClose} />
        <ProductionHover open={productionDesignOpen} handleClose={handleClose} />
        <DigitalMarketingHover open={digitalmarketingDesignOpen} handleClose={handleClose} />
      </div>
    </>
  );
}

export default Header;