


import React, { useEffect } from 'react'
import cartoonart from "../../assets/PortfolioImages/cartoon1.jpg"
import mandala from "../../assets/PortfolioImages/mandala.png"
import football from "../../assets/PortfolioImages/FOOTBALL.jpg"
import conceptart from "../../assets/PortfolioImages/conceptart.png"
import digitalart from "../../assets/PortfolioImages/digitalart.jpg"
import apeillustration from "../../assets/PortfolioImages/apeillustration.jpg"

import { motion } from "framer-motion"


const TwoDAnimation = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">2D Animation</motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[320px] h-[300px]' src={cartoonart} alt="" />
            <p className='text-[#808080] mt-3'>DESING |CARTOON </p>
            <h2 className='text-[18px]'>Cartoon Art</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} >
            <img className='w-[320px] h-[300px]' src={mandala} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | MANDALA </p>
            <h2 className='text-[18px]'>Mandala</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[320px] h-[300px]' src={football} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CARTOON</p>
            <h2 className='text-[18px]'>Cartoon</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[320px] h-[300px]' src={conceptart} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CONCEPT ART</p>
            <h2 className='text-[18px]'>
              Concept Art
            </h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[320px] h-[300px]' src={digitalart} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | DIGITAL ART</p>
            <h2 className='text-[18px]'>Digital Art</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[320px] h-[300px]' src={apeillustration} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN |APE ILLUSTRATION</p>
            <h2 className='text-[18px] '>Ape Illustration</h2>
          </motion.div>

        </div>
      </div>
    </>
  )
}
export default TwoDAnimation