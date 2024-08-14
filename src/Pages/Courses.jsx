import React, { useEffect, useRef, useState } from 'react'
import graphicdesign from "../assets/CoursesImages/Graphic Design.png"
import videoediting from "../assets/CoursesImages/Video Editing.png"
import motiondesign from "../assets/CoursesImages/Motion Design.png"
import uiuxdesign from "../assets/CoursesImages/Uiux Design.png"
import gamedevelopment from "../assets/CoursesImages/Game Development.png"
import animation from "../assets/CoursesImages/3d Animation.png"
import arrow from "../assets/HomeImages/Line 1.png"
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"
import GraphicDesignModel from '../Components/CoursesModel/GraphicDesignModel'
import { NavLink } from 'react-router-dom'
import VideoEditingModel from '../Components/CoursesModel/VideoEditingModel'
import MotionDesignModel from '../Components/CoursesModel/MotionDesignModel'
import GameDevelopmentModel from '../Components/CoursesModel/GameDevelopmentModel'
import UiUxDesignModel from '../Components/CoursesModel/UiUxDesignModel'
import AnimationDesignModel from '../Components/CoursesModel/Animation'

const Courses = () => {
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);
  const [videoEditingOpen, setVideoEditingOpen] = useState(false);
  const [motionDesignOpen, setMotionDesignOpen] = useState(false);
  const [uiuxDesignOpen, setUiUxDesignOpen] = useState(false);
  const [gamedevelopmentOpen, setGameDevelopmentOpen] = useState(false);
  const [animationdesignOpen, setAnimationDesignOpen] = useState(false);

  const handleGraphicDesignOpen = () => {
    setGraphicDesignOpen(true);
  };
  const handleVideoEditingOpen = () => {
    setVideoEditingOpen(true);
  };
  const handleMotionDesignOpen = () => {
    setMotionDesignOpen(true);
  };
  const handleUiUxDesignOpen = () => {
    setMotionDesignOpen(true);
  };
  const handleGameDevelopmentOpen = () => {
    setGameDevelopmentOpen(true);
  };

  const handleAnimationDesignOpen = () => {
    setAnimationDesignOpen(true);
  };

  const handleClose = () => {
    setGraphicDesignOpen(false);
    setVideoEditingOpen(false);
    setMotionDesignOpen(false);
    setUiUxDesignOpen(false);
    setGameDevelopmentOpen(false);
    setAnimationDesignOpen(false);
  };


  const introRef = useRef(null);
  const courseRef = useRef(null);
  const buildRef = useRef(null);

  const introInView = useInView(introRef, { once: true });
  const courseInView = useInView(courseRef, { once: true });
  const buildInView = useInView(buildRef, { once: true });

  return (
    <>\
      <div className="max-w-[1536px] mx-auto">
        <div className="Courses_section pt-[30px] pb-[10px]">
          <div ref={introRef} className="font-Outfit">
            <div className="sub_heading text-center xl:pt-[150px] pt-[50px]">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}>
                <h1 className='text-[#B2AFAF] '>WELCOME TO</h1>
                <h1 className='text-white lg:text-[72px] sm:text-[52px] text-[30px] font-bold '>Rank One Academy</h1>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                className="pt-10">
                <p className='text-[#B2AFAF] font-Outfit text-center font-semibold xl:w-[380px] md:w-[500px] md:mx-auto mx-12'>Upskill, Reskill, or Pursue a passion with our courses whether you’re a beginner or already an expert. Unlock your full potential now!</p>
              </motion.div>

              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                className='text-white font-semibold lg:text-[30px] text-[20px] mt-10 mx-5'> Explore endless learning possibilities with us.</motion.h2>
            </div>

            <div className="scroll mt-[100px]">
              <div className='text-[#B2AFAF] text-center sm:text-[20px] text-[12px] font-Outfit'>SCROLL TO EXPLORE</div>
              <div className="down_arrow flex justify-center mt-5 animate-bounce">
                <img src={arrow} alt="Scroll down arrow" />
              </div>
            </div>
          </div>

          <div ref={courseRef} className="features">

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={courseInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}>
              <h1 className='text-white font-bold text-center text-[32px] pb-10 -mt-20 font-Outfit md:pt-[164px] pt-[150px]'>
                Available Courses:</h1>
            </motion.div>
            <div className="card_section font-Outfit grid lg:grid-cols-3 sm:grid-cols-2 2xl:mx-[100px] xl:mx-[80px] lg:mx-[50px] md:mx-[20px] mx-[20px] gap-8">

              {/* ------------CARD 1 --------------- */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={courseInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                onClick={handleGraphicDesignOpen}
                className="card1 bg-[#1E1E1E] w-full rounded-[8px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={graphicdesign} alt="Graphic Design" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Design</button>
                  <h1 className='text-[#F0F0F0] text-[22px] py-5 font-semibold'>Graphic Design</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>Graphic design combines creativity and technology to visually communicate ideas and messages effectively.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </motion.div>

              {/* ------------CARD 2 --------------- */}
              <div onClick={handleVideoEditingOpen} className="card2 bg-[#1E1E1E] w-full rounded-[20px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={videoediting} alt="Video Editing" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Production</button>
                  <h1 className='text-[#F0F0F0] text-[22px] py-5 font-semibold'>Video Editing</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>Video editing transforms raw footage into engaging content, enhancing storytelling through cuts, effects, and sound.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </div>

              {/* ------------CARD 3 --------------- */}
              <div
                onClick={handleMotionDesignOpen}
                className="card3 bg-[#1E1E1E] w-full rounded-[20px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={motiondesign} alt="Motion Design" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Design</button>
                  <h1 className='text-white text-[22px] py-5 font-semibold'>Motion Design</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>Motion design blends animation and graphic elements to create dynamic visuals and engaging experiences.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </div>

              {/* ------------CARD 4--------------- */}
              <div
                onClick={handleUiUxDesignOpen}
                className="card4 bg-[#1E1E1E] w-full rounded-[20px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={uiuxdesign} alt="UI/UX Design" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Design</button>
                  <h1 className='text-white text-[22px] py-5 font-semibold'>UI/UX Design</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>UI/UX design focuses on creating intuitive, user-friendly interfaces and seamless experiences for applications.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </div>

              {/* ------------CARD 5 --------------- */}
              <div
                onClick={handleGameDevelopmentOpen}
                className="card5 bg-[#1E1E1E] w-full rounded-[20px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={gamedevelopment} alt="Game Development" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Development</button>
                  <h1 className='text-white text-[22px] py-5 font-semibold'>Game Development</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>Game development involves designing, coding, and testing interactive experiences to create immersive gameplay.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </div>

              {/* ------------CARD 6 --------------- */}
              <div
                onClick={handleAnimationDesignOpen}
                className="card6 bg-[#1E1E1E] w-full rounded-[20px] shadow-lg cursor-pointer">
                <img className='w-full h-[248px]' src={animation} alt="3D Animation" />
                <div className="text lg:px-10 px-7 py-5">
                  <button className='bg-[#99C9FF] bg-opacity-[20%] text-[#568DFF] font-medium rounded-[5px] py-1 px-3 text-[14px]'>Animation</button>
                  <h1 className='text-white text-[22px] py-5 font-semibold'>3D Animation</h1>
                  <p className='text-[#F0F0F0] text-[18px]'>3D animation creates lifelike, three-dimensional visuals by animating digital models and scenes.</p>
                  <div className="text-[#568DFF] flex space-x-3 pt-5">
                    <h1 className='text-[15px] font-semibold'>Learn More</h1>
                    <p className='text-[15px]'><i className="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div ref={buildRef} className="joinus_section font-Outfit bg-white py-[80px] mt-[100px]">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={buildInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}>
              <h1 className='text-center text-[#B2AFAF] '>EXCITED !</h1>
              <h1 className='2xl:text-[82px] xl:text-[72px] 
          md:text-[62px] sm:text-[42px] text-[32px] text-center md:mx-auto mx-10 md:w-[900px]   font-bold'>Let's build or improve your digital product</h1>
            </motion.div>


            <div className="bnts flex sm:flex-row flex-col sm:justify-center mt-20 sm:space-x-10  items-center sm:space-y-0 space-y-4">
              <motion.button
                initial={{ x: -60, opacity: 0 }}
                animate={buildInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="border-2 border-[#0B091C] px-5 py-2">Book a 15-min call</motion.button>

              <NavLink to='/contact'>
                <motion.button
                  initial={{ x: 60, opacity: 0 }}
                  animate={buildInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  className="bg-[#0B091C] px-12 py-2 text-[#F0F0F0]">Contact us</motion.button>
              </NavLink>
            </div>
          </div>
          <GraphicDesignModel open={graphicDesignOpen} handleClose={handleClose} />
          <VideoEditingModel open={videoEditingOpen} handleClose={handleClose} />
          <MotionDesignModel open={motionDesignOpen} handleClose={handleClose} />
          <UiUxDesignModel open={uiuxDesignOpen} handleClose={handleClose} />
          <GameDevelopmentModel open={gamedevelopmentOpen} handleClose={handleClose} />
          <AnimationDesignModel open={animationdesignOpen} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default Courses;
