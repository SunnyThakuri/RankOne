

import React, { useEffect } from 'react'
import animation01 from "../../assets/PortfolioImages/Animation1.png"
import animation02 from "../../assets/PortfolioImages/Animaton2.png"
import animation03 from "../../assets/PortfolioImages/Animaton3.png"
import animation04 from "../../assets/PortfolioImages/Animaton4.png"
import animaton05 from "../../assets/PortfolioImages/Animaton5.png"
import animation06 from "../../assets/PortfolioImages/Animaton6.png"

import { delay, motion } from "framer-motion"


const Animation = () => {


  return (
    <>

      <div className="Animation text-white lg:mr-[100px]">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">2D & 3D animation</motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3 ">

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img className='h-[200px] lg:h-auto' src={animation01} alt="" />
            <h2 className='text-[18px]'>VR Game</h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img className='h-[200px] lg:h-auto' src={animation02} alt="" />
            <h2 className='text-[18px]'>Add To Cart</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='h-[200px] lg:h-auto' src={animation03} alt="" />
            <h2 className='text-[18px]'>Visual Image</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='h-[200px] lg:h-auto' src={animation04} alt="" />
            <h2 className='text-[18px]'>Saturn Modeling</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} >
            <img className='h-[200px] lg:h-auto' src={animaton05} alt="" />
            <h2 className='text-[18px]'>Meuseum Modeling</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='h-[200px] lg:h-auto' src={animation06} alt="" />
            <h2 className='text-[18px] '>VR Game</h2>
          </motion.div>

        </div>
      </div >
    </>
  )
}
export default Animation