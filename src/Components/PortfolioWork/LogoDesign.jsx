import React, { useEffect } from 'react'
import logodesign01 from "../../assets/PortfolioImages/aerophonix-01.jpg"
import logodesign011 from "../../assets/PortfolioImages/aerophonix-02.jpg"
import logodesign02 from "../../assets/PortfolioImages/K mark Logo-04.jpg"
import logodesign022 from "../../assets/PortfolioImages/K mark Logo-05.jpg"
import logodesign03 from "../../assets/PortfolioImages/Zenvita Naturals Logo Design-05.jpg"
import logodesign033 from "../../assets/PortfolioImages/Zenvita Naturals Logo Design-04.jpg"
import logodesign04 from "../../assets/PortfolioImages/MURALI FOUNDATION LOGO-01.jpg"
import logodesign044 from "../../assets/PortfolioImages/MURALI FOUNDATION LOGO-02.jpg"
import logodesign05 from "../../assets/PortfolioImages/aerophonix-01.jpg"
import logodesign055 from "../../assets/PortfolioImages/aerophonix-03.jpg"
import logodesign06 from "../../assets/PortfolioImages/Multiemployment01.jpg"
import logodesign066 from "../../assets/PortfolioImages/Multiemployment02.jpg"
import logodesign07 from "../../assets/PortfolioImages/WORKS-43.jpg"
import logodesign077 from "../../assets/PortfolioImages/WORKS-39.jpg"
import logodesign08 from "../../assets/PortfolioImages/PD- LOGO-03.jpg"
import logodesign088 from "../../assets/PortfolioImages/PD- LOGO-04.jpg"
import { motion } from "framer-motion"
import { delay } from 'framer-motion'

const LogoDesign = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">Logo Design</motion.h1>

        <div className="boxes grid xl:grid-cols-4  grid-cols-2 mt-10 lg:gap-10 gap-3">

          < motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} className="sm:w-64  bg-gray-100 cursor-pointer">

            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign011} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign01}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>


          {/* ---------------------------2nd box-------------------- */}
          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign02} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign022}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>


          {/* --------------------------3rd box-------------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign03} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign033}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>



          {/* ---------------------------4th box-------------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign044} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign04}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>


          {/* ---------------------------5th box-------------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52   flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign055} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign05}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>



          {/* ----------------6th box----------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign066} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign06}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* ---------------------------7th box-------------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign077} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign07}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* ---------------------------8th box-------------------- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:w-64  bg-gray-100 cursor-pointer">
            <div className="relative group ">
              <div className="sm:w-64 w-full sm:h-64 h-52 border-[0.5px] border-[#E0E0E0] flex items-center justify-center text-black text-xl bg-white">
                <img src={logodesign08} alt="" />
              </div>

              <div className="absolute inset-0 sm:w-64  sm:h-64 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={logodesign088}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>




        </div>
      </div >
    </>
  )
}
export default LogoDesign