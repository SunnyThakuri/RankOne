import React, { useEffect } from 'react'
import conceptIllustration from "../../assets/PortfolioImages/Illustration/ConcetIllustration.png"
import characterIllustration from "../../assets/PortfolioImages/Illustration/characterIllustration.jpg"
import cartoonIllustration from "../../assets/PortfolioImages/Illustration/CartoonIllustration.jpg"
import mandala from "../../assets/PortfolioImages/Illustration/mandala.png"
import apeillustration from "../../assets/PortfolioImages/Illustration/APE ILLUSTRATIONS.jpg"
import { motion } from "framer-motion"

const Illustration = () => {

  return (
    <>
      <div className="Design_Branding text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-[22px] ">Illustration</motion.h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[300px] h-[300px]' src={conceptIllustration} alt="" />
            <p className='text-[#808080] mt-3'>DESING | Concept Illustration </p>
            <h2 className='text-[18px]'>Concept Illustration</h2>
            <h2 className='text-[18px]'>Ape Illustration</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[300px] h-[300px]' src={characterIllustration} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | Character Illustration</p>
            <h2 className='text-[18px]'>Character Illustration</h2>
            <h2 className='text-[18px]'>Ape Illustration</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[300px] h-[300px]' src={mandala} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | Mandala </p>
            <h2 className='text-[18px]'>Mandala</h2>
            <h2 className='text-[18px]'>Ape Illustration</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[300px] h-[300px]' src={cartoonIllustration} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | Cartoon Illustration</p>
            <h2 className='text-[18px]'>Cartoon Illustration</h2>
            <h2 className='text-[18px]'>Ape Illustration</h2>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}>
            <img className='w-[300px] h-[300px]' src={apeillustration} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | Ape Illustration</p>
            <h2 className='text-[18px]'>Ape Illustration</h2>
          </motion.div>


        </div>
      </div>
    </>
  )
}
export default Illustration