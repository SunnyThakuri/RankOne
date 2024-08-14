import React, { useEffect } from 'react'
import design01 from "../../assets/PortfolioImages/Desig01.png"
import design02 from "../../assets/PortfolioImages/Design02.png"
import design03 from "../../assets/PortfolioImages/Design03.png"
import design04 from "../../assets/PortfolioImages/Design04.png"
import design05 from "../../assets/PortfolioImages/Design05.png"
import design06 from "../../assets/PortfolioImages/Design06.png"

import { motion } from "framer-motion"

const GraphicDesign = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">Design & Branding</motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design01} alt="" />
            <p className='text-[#808080] mt-3'>DESING | BRANDING </p>
            <h2 className='text-[18px]'>Biryani Moments</h2>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design02} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>Social|Media Posts for Biryani Moments</h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design03} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design04} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA</p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design05} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={design06} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | SOCIAL MEDIA</p>
            <h2 className='text-[18px] '>99Nepal lenovo Ideapad</h2>
          </motion.div>

        </div>
      </div >
    </>
  )
}
export default GraphicDesign