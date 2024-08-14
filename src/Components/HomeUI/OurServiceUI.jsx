import { useRef, useState } from "react";
import videoImg from "../../assets/HomeImages/ourServices.png";
import { motion, useInView } from 'framer-motion';
import { NavLink } from "react-router-dom";
import AnimationHover from "../ServiceWork/AnimationHover";
import DesignHover from "../ServiceWork/DesignHover";
import DevelopmentHover from "../ServiceWork/DevelopmentHover";
import ProductionHover from "../ServiceWork/ProductionHover";
import DigitalMarketingHover from "../ServiceWork/DigitalMarketingHover";

const OurServiceUI = () => {

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="all_items mx-4 sm:mx-8 lg:mx-[80px] md:mt-[164px] mt-[120px] ">
      <div className="items flex flex-col lg:flex-row justify-between">

        <motion.div
          ref={ref}
          // initial={{ y: 80, opacity: 0 }}
          // animate={isInView ? { y: 0, opacity: 1 } : {}}
          // transition={{ duration: 1, ease: 'easeOut' }}
          className="left-side font-Outfit space-y-6 sm:space-y-[34px] text-[#8F8F8F]"
        >
          <h1 className="text-white ml-4 sm:ml-8 lg:ml-[50px] text-[20px]">Our Services:</h1>

          <div
            onClick={handleGraphicDesignOpen}
            className="design cursor-pointer group flex space-x-5 mt-8 sm:pt-[44px]">
            <h1 className="font-Outfit flex flex-col justify-center font-semibold group-hover:text-white">01.</h1>
            <div className="flex w-full lg:w-[699px] justify-between border-b-2 border-b-[#8F8F8F] group-hover:border-b-white pb-5">
              <h1 className="group-hover:text-white font-extrabold text-lg sm:text-[26px]">DESIGN & BRANDING</h1>
              <i className="fa-solid fa-arrow-right transition-opacity opacity-0 group-hover:opacity-100 transition-transform transform group-hover:translate-x-5 mr-5"></i>
            </div>
          </div>

          <div
            onClick={handleGameDevelopmentOpen}
            className="DEVELOPMENT cursor-pointer group flex space-x-5">
            <h1 className="font-Outfit flex flex-col justify-center font-semibold group-hover:text-white">02.</h1>
            <div className="flex w-full lg:w-[699px] justify-between border-b-2 border-b-[#8F8F8F] group-hover:border-b-white pb-5">
              <h1 className="font-extrabold text-lg sm:text-[26px] group-hover:text-white">DEVELOPMENT</h1>
              <i className="fa-solid fa-arrow-right transition-opacity opacity-0 group-hover:opacity-100 transition-transform transform group-hover:translate-x-5 mr-5"></i>
            </div>
          </div>

          <div
            onClick={handleProductionDesignOpen}
            className="PRODUCTION cursor-pointer group flex space-x-5">
            <h1 className="font-Outfit flex flex-col justify-center font-semibold group-hover:text-white">03.</h1>
            <div className="flex w-full lg:w-[699px] justify-between border-b-2 border-b-[#8F8F8F] group-hover:border-b-white pb-2">
              <h1 className="font-extrabold text-lg sm:text-[26px] pb-5 group-hover:text-white">PRODUCTION</h1>
              <i className="fa-solid fa-arrow-right transition-opacity opacity-0 group-hover:opacity-100 transition-transform transform group-hover:translate-x-5 mr-5"></i>
            </div>
          </div>

          <div
            onClick={handleDigitalMarketingDesignOpen}
            className="digital cursor-pointer group flex space-x-5">
            <h1 className="font-Outfit flex flex-col justify-center font-semibold group-hover:text-white">04.</h1>
            <div className="flex w-full lg:w-[699px] justify-between border-b-2 border-b-[#8F8F8F] group-hover:border-b-white pb-5">
              <h1 className="font-extrabold text-lg sm:text-[26px] group-hover:text-white">DIGITAL MARKETING</h1>
              <i className="fa-solid fa-arrow-right transition-opacity opacity-0 group-hover:opacity-100 transition-transform transform group-hover:translate-x-5 mr-5"></i>
            </div>
          </div>

          <div
            onClick={handleAnimationDesignOpen}
            className="ANIMATION cursor-pointer group flex space-x-5">
            <h1 className="font-Outfit flex flex-col justify-center font-semibold group-hover:text-white">05.</h1>
            <div className="flex w-full lg:w-[699px] justify-between border-b-2 border-b-[#8F8F8F] group-hover:border-b-white pb-5">
              <h1 className="font-extrabold text-lg sm:text-[26px] group-hover:text-white">ANIMATION</h1>
              <i className="fa-solid fa-arrow-right transition-opacity opacity-0 group-hover:opacity-100 transition-transform transform group-hover:translate-x-5 mr-5"></i>
            </div>
          </div>

          <div className="btn pt-5 pl-[50px]">
            <NavLink to='/contact'>
              <button className="border-2 border-[#B2AFAF] hover:border-white px-4 py-3 text-[#B2AFAF] hover:text-white">
                WORK WITH US <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </NavLink>
          </div>
        </motion.div>

        <div className="right-side mt-20 lg:mt-0 h-[613px]">
          <img className="w-full sm:w-[492px] h-[613px]" src={videoImg} alt="Our Services" />
        </div>

        <AnimationHover open={animationdesignOpen} handleClose={handleClose} />
        <DesignHover open={graphicDesignOpen} handleClose={handleClose} />
        <DevelopmentHover open={gamedevelopmentOpen} handleClose={handleClose} />
        <ProductionHover open={productionDesignOpen} handleClose={handleClose} />
        <DigitalMarketingHover open={digitalmarketingDesignOpen} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default OurServiceUI;
