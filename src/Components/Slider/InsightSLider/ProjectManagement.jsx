import React, { useRef } from 'react'
import project1 from "../../../assets/BlogImage/communicationimg1.avif"
import project2 from "../../../assets/BlogImage/riskimg1.avif"
import project3 from "../../../assets/BlogImage/projectmanagementImg1.avif"

import leftarrow from "../../../assets/InsightImages/leftarrow.png"
import rightarrow from "../../../assets/InsightImages/rightarrow.png"
import Slider from 'react-slick'
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

const ProjectManagement = () => {
  const sliderRef = useRef(null);

  const sliderInView = useInView(sliderRef, { once: true });

  function SampleNextArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className='w-10 cursor-pointer absolute md:right-5 right-0 -top-[118px]' src={rightarrow} alt="arrow_right" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className='w-10 cursor-pointer absolute md:right-20 sm:right-16 right-14 -top-[118px]' src={leftarrow} alt="arrow_left" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div ref={sliderRef} className="Development Slider_section">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={sliderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="heading md:mt-[164px] mt-[80px] border-b-[0.5px] border-b-[#B2AFAF] pb-5 flex justify-between">
          <h1 className="text-[#B2AFAF]">PROJECT MANAGEMENT</h1>
        </motion.div>

        <Slider ref={sliderRef} {...settings} className='mt-16 relative'>
          {/* ---------------------slider1-------------- */}
          <NavLink to='/projectblogone'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
              className="slider01 group pl-5 cursor-pointer">
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer' src={project1} alt="" />
              </div>

              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Effective Communication Strategies</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>Where to start your e-commerce website redesign to increase revenue</h2>
              <p className='text-[#B2AFAF] pt-5'>This post would discuss the importance of clear and consistent communication in project management. It could offer strategies for managing communication across different teams and stakeholders, tips for using tools like Slack or MS Teams effectively.</p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* -----slider02---------- */}
          <NavLink to='/projectblogtwo'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
              className="slider02 px-5 group">
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer' src={project2} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Risk Management</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>Identifying and Mitigating Risks in Your Projects</h2>
              <p className='text-[#B2AFAF] pt-5'>This article would focus on the importance of risk management in project planning and execution. It would cover how to identify potential risks early in the project lifecycle, assess their impact and likelihood, and develop strategies to mitigate them. </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* -----slider03---------- */}
          <NavLink to='/projectblogthree'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
              className="slider03 group">
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full rounded-lg hover:scale-105 ease-in duration-150 cursor-pointer' src={project3} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>PROJECT MANAGEMENT</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>Where to start your e-commerce website redesign to increase revenue</h2>
              <p className='text-[#B2AFAF] pt-5'>Unlock the potential of headless commerce with our insightful guide on its benefits. It explores how detaching the frontend from the backend can revolutionize e-commerce platforms, offering enhanced flexibility and improved user experiences.</p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>
        </Slider>
      </div>
    </>
  )
}

export default ProjectManagement
