import React, { useRef } from 'react'
import others1 from "../../../assets/BlogImage/animationImg1.jpg"
import others2 from "../../../assets/BlogImage/digitalmarketingImg1.avif"
import others3 from "../../../assets/BlogImage/videoeditingImg1.avif"

import leftarrow from "../../../assets/InsightImages/leftarrow.png"
import rightarrow from "../../../assets/InsightImages/rightarrow.png"
import Slider from 'react-slick'
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
const OthersSlider = () => {
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
          className="heading md:mt-[164px] mt-[80px] border-b-[0.5px] border-b-[#B2AFAF] pb-5 flex justify-between"
        >
          <h1 className="text-[#B2AFAF]">Others</h1>
        </motion.div>

        <Slider ref={sliderRef} {...settings} className='mt-16 relative'>
          {/* ---------------slider1------------------- */}
          <NavLink to='/othersblogone'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
              className="slider01 group pl-5 cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={others1} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Animation</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Create engaging animations for cards with smooth transitions and effects.
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Explore the impact of animation in web design. Discover how animations can enhance user engagement, improve visual storytelling, and create a more interactive experience, adding dynamic elements to static content.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ------------------------slider2---------- */}
          <NavLink to='/othersblogtwo'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
              className="slider02 px-5 group cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={others2} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Digital Marketing</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Best digital marketing Seo agency: Strategies to boost visibility.
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Unlock the power of digital marketing with our comprehensive guide. Learn how to leverage online channels, social media, and data-driven strategies to boost brand visibility.
              </p>
              <div className="text-[#568DFF] flex space-x-3 pt-5">
                <h1 className='text-[18px] font-semibold'>Read More</h1>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </motion.div>
          </NavLink>

          {/* ------------------------slider3---------- */}
          <NavLink to='/othersblogthree'>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={sliderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
              className="slider03 group cursor-pointer border-[5px] border-[#141414] overflow-hidden rounded-lg"
            >
              <div className="image overflow-hidden block rounded-lg">
                <img className='h-[240px] w-full hover:scale-105 ease-in duration-150 cursor-pointer ' src={others3} alt="" />
              </div>
              <h1 className='text-[#B2AFAF] pt-5 group-hover:opacity-0'>Video Editing</h1>
              <h2 className='text-[24px] text-white group-hover:-translate-y-5 duration-300 ease-in-out'>
                Enhance your content with expert video editing for a polished look
              </h2>
              <p className='text-[#B2AFAF] pt-5'>
                Unlock the power of video editing to transform raw footage into engaging, professional-quality content. Learn techniques to enhance visuals, optimize sound, and create compelling narratives that captivate your audience.
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

export default OthersSlider;
