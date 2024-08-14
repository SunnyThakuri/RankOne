import React, { useEffect, useRef } from 'react';
import client1 from "../../assets/HomeImages/client1.png";
import client2 from "../../assets/HomeImages/client2.png";
import client3 from "../../assets/HomeImages/client3.png";
import client4 from "../../assets/HomeImages/client4.png";
import client5 from "../../assets/HomeImages/client5.png";
import client6 from "../../assets/HomeImages/client6.png";
import client7 from "../../assets/HomeImages/client7.png";
import client8 from "../../assets/HomeImages/client8.png";
import client9 from "../../assets/HomeImages/client9.png";
import client10 from "../../assets/HomeImages/client10.png";
import client11 from "../../assets/HomeImages/client11.png";
import client12 from "../../assets/HomeImages/client12.png";
import { motion, useInView } from 'framer-motion'


const Client = () => {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="Our_Clients bg-white md:mt-[164px] mt-[120px]">

      <div className="sub_heading text-center pt-[100px]  ">
        <motion.h1
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-[32px] font-bold xl:px-[80px] lg:px-[50px] px-[20px]'>Our clients love working with us!</motion.h1>

        <motion.p
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className='text-center font-semibold text-[#878787]  xl:px-[80px] lg:px-[50px] px-[50px]'>
          Crafting Unforgettable Mission-Driven Brands
        </motion.p>
      </div>

      <div
        className="clients grid lg:grid-cols-4 grid-cols-2 mt-[100px]  xl:mx-[80px] lg:mx-[50px] pb-[95px]">
        <div className="client1 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-5">
          <img className='md:w-auto w-[150px]' src={client1} alt="client1" />
        </div>
        <div className="client2 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-5">
          <img className='md:w-auto w-[150px]' src={client2} alt="client2" />
        </div>
        <div className="client3 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client3} alt="client3" />
        </div>
        <div className="client4 border-b-2 border-b-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client4} alt="client4" />
        </div>
        <div className="client5 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client5} alt="client5" />
        </div>
        <div className="client6 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client6} alt="client6" />
        </div>
        <div className="client7 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client7} alt="client7" />
        </div>
        <div className="client8 border-b-2 border-b-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client8} alt="client8" />
        </div>
        <div className="client9 lg:border-b-0 border-b-2 border-b-[#B5B5B5]  border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client9} alt="client9" />
        </div>
        <div className="client10 lg:border-b-0 border-b-2 border-b-[#B5B5B5] border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client10} alt="client10" />
        </div>
        <div className="client11   border-r-2 border-r-[#B5B5B5] flex justify-center items-center  py-8">
          <img src={client11} alt="client11" />
        </div>
        <div className="client12  flex justify-center items-center p-4">
          <img src={client12} alt="client12" />
        </div>
      </div>
    </div >
  );
};

export default Client;
