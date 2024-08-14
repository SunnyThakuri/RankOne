import React, { useEffect } from 'react'
import branding01 from "../../assets/PortfolioImages/Branding/Brochure.jpg"
import branding02 from "../../assets/PortfolioImages/Branding/Envelope.jpg"
import branding03 from "../../assets/PortfolioImages/Branding/Jam-jar-mockup-10.jpg"
import branding04 from "../../assets/PortfolioImages/Branding/Letterhead.jpg"
import branding05 from "../../assets/PortfolioImages/Branding/Zenvita Naturals Logo Design-02.jpg"
import branding06 from "../../assets/PortfolioImages/Branding/dk.jpg"
import branding07 from "../../assets/PortfolioImages/Branding/tshirt.png"
import branding08 from "../../assets/PortfolioImages/Branding/envelope2.png"
import branding09 from "../../assets/PortfolioImages/Branding/bag.png"
import branding10 from "../../assets/PortfolioImages/Branding/audition.png"

import { motion } from "framer-motion"

const Branding = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">Branding
        </motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding01} alt="" />
            <p className='text-[#808080] mt-3'>DESING | BROCHEURE </p>
            <h2 className='text-[18px]'>Brochure</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding02} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | ENVELOPE </p>
            <h2 className='text-[18px]'>Envelope</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding03} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | JAM JAR</p>
            <h2 className='text-[18px]'>Jam Jar</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} >
            <img className='w-[310px] h-[310px]' src={branding04} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | LETTERHEAD</p>
            <h2 className='text-[18px]'>Letterhead</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding05} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | ZENVITA NATURALS </p>
            <h2 className='text-[18px]'>Zenvita Naturals</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding06} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | DK RECURITMENT</p>
            <h2 className='text-[18px] '>DK Recuritment</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }} >
            <img className='w-[310px] h-[310px]' src={branding07} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | T-SHIRT</p>
            <h2 className='text-[18px] '>T-SHIRT</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding08} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | ENVELOPE</p>
            <h2 className='text-[18px] '>ENVELOPE</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding09} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | HANDBAG</p>
            <h2 className='text-[18px] '>HANDBAG</h2>
          </motion.div>


          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[310px] h-[310px]' src={branding10} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | POSTER</p>
            <h2 className='text-[18px] '>POSTER</h2>
          </motion.div>

        </div >
      </div >
    </>
  )
}
export default Branding