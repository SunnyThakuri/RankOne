import React, { useEffect } from 'react'
import art from "../../assets/PortfolioImages/Art.jpg"
import sketch from "../../assets/PortfolioImages/sketch.jpg"

import { delay } from 'framer-motion'
import { motion } from "framer-motion"

const Art = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">Arts</motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3  lg:gap-[100px]">
          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[400px] h-[400px]' src={art} alt="" />
            <p className='text-[#808080] mt-3'>DESING | Sketch </p>
            <h2 className='text-[18px]'>Sketch</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[400px] h-[400px]' src={sketch} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | Digital Arts</p>
            <h2 className='text-[18px]'>Digital Arts</h2>
          </motion.div>


        </div>
      </div >
    </>
  )
}
export default Art