import subheadingImg from "../../assets/HomeImages/subheadingImg.png";
import arrow from "../../assets/HomeImages/Line 1.png";
import videoss from "../../assets/HomeImages/video.mp4";
import { motion } from 'framer-motion';


const GrowthUI = () => {
  return (
    <>
      <div className="subheading_item lg:flex md:mx-[80px] mx-[29px] md:mt-[100px] lg:mt-[129px] mt-[150px]">

        <div className="left_side mt-[70px]">

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white xl:text-[54px] lg:text-[44px] text-[29px] font-extrabold lg:text-left text-center">WE ARE A</motion.h1>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white xl:text-[54px] lg:text-[44px] text-[29px] font-extrabold lg:-mt-5 -mt-3 lg:text-left text-center">GROWTH-FOCUSED</motion.h1>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[#002AF7] xl:text-[54px] lg:text-[44px] text-[29px] font-extrabold lg:w-[700px] lg:-mt-5 -mt-3 lg:text-left text-center">DIGITAL MARKETING</motion.h1>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white xl:text-[54px] lg:text-[44px] text-[29px] font-extrabold lg:-mt-5 -mt-3 lg:text-left text-center">AGENCY.</motion.h1>
        </div>


        <div className="right_side mt-[50px] rounded-[8px]">
          <video width="750" height="500" controls autoPlay muted playsInline>
            <source src={videoss} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="scroll mt-[100px]">
        <div className="text-[#B2AFAF] hover:text-white text-center sm:text-[20px] text-[12px] font-Outfit">SCROLL TO EXPLORE</div>
        <div className="down_arrow flex justify-center mt-5 animate-bounce">
          <img src={arrow} alt="" />
        </div>

      </div>
    </>
  );
}

export default GrowthUI;
