import React, { useRef } from 'react';
import design1 from "../../../assets/BlogImage/designblog.jpg";
import design2 from "../../../assets/BlogImage/colortheory.avif";
import design3 from "../../../assets/BlogImage/typography.avif";

import leftarrow from "../../../assets/InsightImages/leftarrow.png";
import rightarrow from "../../../assets/InsightImages/rightarrow.png";
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const DesignSlider = () => {
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
      <div ref={sliderRef} className="Design Slider_section">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={sliderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="heading md:mt-[164px] mt-[80px] border-b-[0.5px] border-b-[#B2AFAF] pb-5 flex justify-between"
        >
          <h1 className="text-[#B2AFAF]">DESIGN</h1>
        </motion.div>

        <Slider ref={sliderRef} {...settings} className='mt-16 relative'>

          {/* ---------------------slider1-------------- */}
          <NavLink to='/designblogone'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
              className="slider01 group pl-5 cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={design1} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>DESIGN</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Key Principles for Creating Intuitive Web Interfaces
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Explore the core principles of user-centered design, including simplicity, consistency, and accessibility. Discuss how to create interfaces that are not only visually appealing but also easy to navigate and use, with examples of successful designs.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ---------------------slider2-------------- */}
          <NavLink to='/designblogtwo'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
              className="slider02 px-5 group cursor-pointer  overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={design2} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'> Color Theory</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                How to Use Color to Influence User Behavior
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Dive into the psychology of color and how it affects user perception and behavior on websites. Offer tips on selecting color palettes that align with a brand's identity and evoke the desired emotional responses from users.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ---------------------slider3-------------- */}
          <NavLink to='/designblogthree'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
              className="slider03 px-5 group cursor-pointer  overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={design3} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Typography</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Crafting Visual Hierarchy and Enhancing Readability
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Discuss the role of typography in creating a compelling user experience. Cover aspects like font pairing, sizing, spacing, and how to use typography to establish a clear visual hierarchy. Include tips on selecting web-safe fonts and ensuring readability across different devices.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

        </Slider>
      </div>
    </>
  );
};

export default DesignSlider;
