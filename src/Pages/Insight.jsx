import React, { useEffect, useRef } from 'react'
import subheadingImg01 from "../assets/InsightImages/subheading01.png"
import subheadingImg02 from "../assets/InsightImages/subheading02.png"
import subheadingImg03 from "../assets/InsightImages/subheading03.png"

import caterogryicon1 from "../assets/InsightImages/categoryicon1.png"
import caterogryicon2 from "../assets/InsightImages/categroyicon2.png"
import caterogryicon3 from "../assets/InsightImages/categroyicon3.png"
import caterogryicon4 from "../assets/InsightImages/categoryicon4.png"

import DevelopmentSlider from '../Components/Slider/InsightSLider/DevelopmentSlider'
import DesignSlider from "../Components/Slider/InsightSLider/DesignSlider"
import Projectmangement from "../Components/Slider/InsightSLider/ProjectManagement"
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"
import OthersSlider from '../Components/Slider/InsightSLider/OthersSlider'
import { NavLink } from 'react-router-dom'




const Insight = () => {
  const introRef = useRef(null);
  const categoryRef = useRef(null);
  const excitedRef = useRef(null);
  const buildRef = useRef(null);

  const introInView = useInView(introRef, { once: true });
  const categoryInView = useInView(categoryRef, { once: true });
  const excitedInView = useInView(excitedRef, { once: true });
  const buildInView = useInView(buildRef, { once: true });


  const designSliderRef = useRef(null);
  const projectManagementRef = useRef(null);
  const developmentRef = useRef(null);
  const othersRef = useRef(null);

  const handleCategoryClick = (category) => {
    if (category === 'design' && designSliderRef.current) {
      designSliderRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'projectManagement' && projectManagementRef.current) {
      projectManagementRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'development' && developmentRef.current) {
      developmentRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'others' && othersRef.current) {
      othersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div ref={introRef} className="insight xl:px-[100px] lg:px-[80px] md:px-[50px] px-[20px] font-Outfit pt-[124px] overflow-hidden">

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={introInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="border-b-[0.5px] border-b-[#B2AFAF] text-[#B2AFAF] pb-5">FEATURED ARTICLES</motion.h1>



          {/* ---------------SUBHEADING CARD--------------------- */}
          <div className="subheading md:flex gap-10 mt-10">

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={introInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              className="subgheadingImg1 group">

              <div className="overflow-hidden block rounded-lg">
                <img className='w-[1530px] rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer' src={subheadingImg01} alt="" />
              </div>

              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>DESIGN</h1>

              <p className='text-white xl:text-[25px] lg:text-[20px] text-[18px] 2xl:pr-[280px] xl:pr-[180px] lg:pr-[150px] pb-10 group-hover:-translate-y-5 duration-300 ease-in-out'>
                Creative designer specializing in user-centric visuals, web design, and branding.
              </p>
            </motion.div>

            <div className="img2andimg3 flex flex-col gap-5">

              {/* --------------------card2----------- */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="subgheadingImg2 group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    className='w-full rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer'
                    src={subheadingImg02}
                    alt=""
                  />
                </div>
                <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>DEVELOPMENT</h1>
                <p className='text-white xl:text-[25px] lg:text-[20px] group-hover:-translate-y-5 duration-300 ease-in-out'>
                  Where to start your e-commerce website redesign to increase revenue
                </p>
              </motion.div>

              {/* ------------------------card3----------------- */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
                className="subgheadingImg2 group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    className='w-full rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer'
                    src={subheadingImg03}
                    alt=""
                  />
                </div>
                <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>PROJECT MANAGEMENT</h1>
                <p className='text-white xl:text-[25px] lg:text-[20px] group-hover:-translate-y-5 duration-300 ease-in-out'>
                  Experienced project manager with a proven track.

                </p>
              </motion.div>


            </div>
          </div>

          {/* ---------------CATEGORY_ICON----------------- */}
          <div ref={categoryRef} className="viewbycategory  mt-[100px]">

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={categoryInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className=' text-[#B2AFAF] font-Outfit '>VIEW BY CATEGORY</h1>
              <h1 className='lg:text-[48px] md:text-[38px] text-[28px] text-white font-Outfit font-bold md:w-[700px] '>Sharing our knowledge on a wide range of topics</h1>
            </motion.div>

            <div className="category_items  grid lg:grid-cols-4 grid-cols-2  gap-5 mt-16  ">

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={categoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="category1 group border-[0.5px] border-[#B2AFAF] pl-7 py-5 pr-10 bg-[#1E1E1E] 2xl:w-[300px] rounded-[12px] cursor-pointer">

                <div className="icon group-hover:-translate-y-30 duration-100 ease-in-out group-hover:invisible">
                  <img src={caterogryicon1} alt="" />
                </div>
                <div
                  className="info group-hover:-translate-y-20 duration-300 ease-in-out">
                  <h1 className='text-white font-semibold text-[18px] pt-5 pb-3 '>Development</h1>
                  <p className='text-[#B2AFAF]'>Tech Related Knowledge</p>
                  <div onClick={() => handleCategoryClick('development')} className=" flex space-x-3 border-b-2 border-b-white pb-3 text-white mt-10 tansition transform translate-y-10 ease-in-out invisible
                absolute group-hover:visible
                group-hover:translate-y-0">
                    <h1>Browse Category</h1>
                    <p><i class="fa-solid fa-arrow-right"></i></p>
                  </div>

                </div>
              </motion.div>

              {/* ------------------CATEGORY 2-------------- */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={categoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="category1 group border-[0.5px] border-[#B2AFAF] pl-7 py-5 pr-10 bg-[#1E1E1E] 2xl:w-[300px] rounded-[12px] cursor-pointer">
                <div className="icon group-hover:-translate-y-30 duration-100 ease-in-out group-hover:invisible">
                  <img src={caterogryicon2} alt="" />
                </div>
                <div className="info group-hover:-translate-y-20 duration-300 ease-in-out">
                  <h1 className='text-white font-semibold text-[18px] pt-5 pb-3 '>DeSIGN</h1>
                  <p className='text-[#B2AFAF]'>Tech Related Knowledge</p>
                  <div onClick={() => handleCategoryClick('design')} className=" flex space-x-3 border-b-2 border-b-white pb-3 text-white mt-10 tansition transform translate-y-10 ease-in-out invisible
                absolute group-hover:visible
                group-hover:translate-y-0">
                    <h1 className='category2'>Browse Category</h1>
                    <p><i class="fa-solid fa-arrow-right"></i></p>
                  </div>

                </div>
              </motion.div>

              {/* ------------------CATEGORY 3-------------- */}

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={categoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                className="category1 group border-[0.5px] border-[#B2AFAF] pl-7 py-5 pr-10 bg-[#1E1E1E] 2xl:w-[300px] rounded-[12px] cursor-pointer">
                <div className="icon group-hover:-translate-y-30 duration-100 ease-in-out group-hover:invisible">
                  <img src={caterogryicon3} alt="" />
                </div>

                <div className="info group-hover:-translate-y-20 duration-300 ease-in-out">
                  <h1 className='text-white font-semibold text-[18px] pt-5 pb-3 '>PROJECT MANAGEMENT</h1>
                  <p className='text-[#B2AFAF]'>Tech Related Knowledge</p>
                  <div onClick={() => handleCategoryClick('projectManagement')} className=" flex space-x-3 border-b-2 border-b-white pb-3 text-white mt-10 tansition transform translate-y-10 ease-in-out invisible
                absolute group-hover:visible
                group-hover:translate-y-0">
                    <h1>Browse Category</h1>
                    <p><i class="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </motion.div>

              {/* ------------------CATEGORY 4-------------- */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={categoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className="category1 group border-[0.5px] border-[#B2AFAF] pl-7 py-5 pr-10 bg-[#1E1E1E] 2xl:w-[300px] rounded-[12px] cursor-pointer">
                <div className="icon group-hover:-translate-y-30 duration-100 ease-in-out group-hover:invisible">
                  <img src={caterogryicon4} alt="" />
                </div>
                <div className="info group-hover:-translate-y-20 duration-300 ease-in-out">
                  <h1 className='text-white font-semibold text-[18px] pt-5 pb-3 '>OTHERS</h1>
                  <p className='text-[#B2AFAF]'>Tech Related Knowledge</p>
                  <div onClick={() => handleCategoryClick('others')} className=" flex space-x-3 border-b-2 border-b-white pb-3 text-white mt-10 tansition transform translate-y-10 ease-in-out invisible
                absolute group-hover:visible
                group-hover:translate-y-0">
                    <h1>Browse Category</h1>
                    <p><i class="fa-solid fa-arrow-right"></i></p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>



          {/* -----------SLIDER SECTION --------- */}

          <section>
            <div ref={developmentRef} i>
              <DevelopmentSlider d="development_slider" />
            </div>
            <div ref={designSliderRef} >
              <DesignSlider id="design_slider" />
            </div>
            <div ref={projectManagementRef} >
              <Projectmangement id="project_management_slider" />
            </div>
            <div ref={othersRef} >
              <OthersSlider id="others_slider" />
            </div>
          </section>

          {/* ---------excited--------- */}
          <div>
            <motion.div
              ref={excitedRef}
              initial={{ y: 40, opacity: 0 }}
              animate={excitedInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
              className="joinus_section font-Outfit">
              <h1 className='text-center text-[#B2AFAF] sm:mt-[150px] mt-[100px]'>EXCITED?</h1>
              <h1 className='xl:text-[82px] lg:text-[72px] sm:text-[52px] text-[32px] text-center  lg:mx-auto lg:w-[900px]  text-white font-bold'>Let's build or improve your digital product</h1>
            </motion.div>

            <div className="btns flex sm:flex-row flex-col sm:justify-center mt-20 sm:space-x-10  items-center sm:space-y-0 space-y-4 ">
              < motion.button
                ref={excitedRef}
                initial={{ x: -60, opacity: 0 }}
                animate={excitedInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className=' bg-white px-12 py-2 '>Contact Us</motion.button>

              <NavLink to='/contact'>
                <motion.button
                  ref={excitedRef}
                  initial={{ x: 60, opacity: 0 }}
                  animate={excitedInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  className='border-2 border-white px-8 py-2  text-white'>Schedule a Call</motion.button>
              </NavLink>
            </div>

          </div>

        </div >
      </div>
    </>
  )
}
export default Insight