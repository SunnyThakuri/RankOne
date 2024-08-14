
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';


const ExcitedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="all-items md:mt-[164px] mt-[120px]">
        <motion.h1
          ref={ref}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[#7F7F7F] text-center">EXCITED ?</motion.h1>

        <motion.h1
          ref={ref}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-center text-white font-semibold lg:text-[54px] md:text-[48px] text-[34px] mt-10">World-Class Websites</motion.h1>

        <motion.h1
          ref={ref}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-center text-white font-semibold lg:text-[54px] md:text-[48px] text-[34px] ">On‑Time. On‑Budget. On‑Point.</motion.h1>

        <div className="bnts flex sm:flex-row flex-col sm:justify-center mt-20 sm:space-x-10  items-center sm:space-y-0 space-y-4">
          <motion.button
            ref={ref}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="border-2 border-[#B2AFAF] hover:border-white text-[#B2AFAF] px-5 py-2 hover:text-white">Book a 15-min call</motion.button>

          <NavLink to='/contact'>
            <motion.button
              ref={ref}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="bg-white px-12 py-2 text-[#141414] hover:text-[#B2AFAF]">Contact us</motion.button>
          </NavLink>
        </div>
      </div >
    </>
  )
}
export default ExcitedSection