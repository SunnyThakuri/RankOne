import React, { useEffect, useRef } from 'react'
import development1 from "../../../assets/BlogImage/develomentimg2.jpg"
import development2 from "../../../assets/BlogImage/gridvsflex.jpg"
import development3 from "../../../assets/BlogImage/weboptimizationimg1.webp"
import leftarrow from "../../../assets/InsightImages/leftarrow.png"
import rightarrow from "../../../assets/InsightImages/rightarrow.png"
import Slider from 'react-slick'
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

const DevelopmentSlider = () => {
  const sliderRef = useRef(null);
  const sliderInView = useInView(sliderRef, { once: true });

  function SampleNextArrow(props) {
    const { style, onClick } = props;
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
    const { style, onClick } = props;
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
  };

  return (
    <>
      <div ref={sliderRef} className="Development Slider_section">


        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={sliderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="heading mt-[150px] border-b-[0.5px] border-b-[#B2AFAF] pb-5 flex justify-between"
        >
          <h1 className="text-[#B2AFAF]">DEVELOPMENT</h1>
        </motion.div>



        <Slider ref={sliderRef} {...settings} className='mt-16 relative'>
          {/* ---------------------slider1-------------- */}
          <NavLink to='/developmetnblogone'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
              className="slider01 group pl-5 cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={development1} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'> Web Development Trends</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>

                Why It's the Future of Web Development
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Web development trends emphasize AI integration, PWAs, JAMstack architecture, SSR, SPAs, WebAssembly, advanced animations, and enhanced security, driving the creation of faster, more engaging, and secure web experiences.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ---------------------slider2-------------- */}
          <NavLink to='/developmentblogtwo'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
              className="slider02 px-5 group cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={development2} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>CSS Grid vs. Flexbox</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Which Layout System Should You Use?
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                This article would compare CSS Grid and Flexbox, two powerful layout systems in modern web development. It would explain the strengths and weaknesses of each, the scenarios in which one might be more appropriate than the other.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ---------------------slider3-------------- */}
          <NavLink to='/developmentblogthree'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
              className="slider03 group cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={development3} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Web Performance Optimization</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Techniques for Faster Loading websites in your codes
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                This post would focus on the importance of web performance and the impact of load times on user experience and SEO. It could cover techniques for optimizing website speed, such as image optimization, lazy loading, minimizing CSS and JavaScript files, and using content delivery networks (CDNs).
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>
        </Slider>
      </div >
    </>
  );
};

export default DevelopmentSlider;
