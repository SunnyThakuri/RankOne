import React, { useEffect, useRef, useState } from 'react'
import project1 from "../../assets/HomeImages/project01.jpg"
import project2 from "../../assets/HomeImages/project02.png"
import project3 from "../../assets/HomeImages/project03.png"
import project4 from "../../assets/HomeImages/project04.jpg"
import project5 from "../../assets/HomeImages/project05.jpg"
import project6 from "../../assets/HomeImages/project06.jpg"
import Slider from 'react-slick'
import leftarrow from "../../assets/HomeImages/leftarrow.png"
import rightarrow from "../../assets/HomeImages/rightarrow.png"
import arrow from "../../assets/HomeImages/Line 6.png"
import "../../style/ProjectSlider.css"

import { motion, useInView } from "framer-motion"


const OurProjectsSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentSlide, setCurrentSlide] = useState(0);

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className='w-10 absolute lg:-mt-[680px] md:-mt-[605px] sm:-mt-[630px] -mt-[550px] lg:right-[115px] md:right-[40px] sm:right-[30px] right-[120px] hidden sm:block' src={rightarrow} alt="arrow_right" />
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
        <img className='w-10 absolute lg:-mt-[90px] md:-mt-[112px] sm:-mt-[138px] -mt-[60px]  lg:right-[220px] md:right-[140px] sm:right-[150px] right-[220px] hidden sm:block' src={leftarrow} alt="arrow_left" />
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          centerMode: true,
          infinite: true,
          centerPadding: "70px",
          slidesToShow: 1,
          speed: 500,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          afterChange: (current) => setCurrentSlide(current),
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 1,
          speed: 500,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          afterChange: (current) => setCurrentSlide(current),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container md:mt-[164px] mt-[120px]">
      <div ref={ref} className="heading sm:flex sm
      justify-between lg:px-[100px] sm:px-[20px] pt-5">
        <div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className='text-[32px] font-Outfit text-white font-semibold text-center sm:text-left'>Our Projects</motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className='text-[#B2AFAF] font-Outfit lg:w-[527px] md:w-[400px] sm:w-[270px]  text-center sm:text-justify'>Go behind the scenes and discover the processes, strategies, and insights that drive our creative, culture, and ultimately, our clients’ success.</motion.h2>
        </div>
        <div className="hidden sm:block">
          <div className="sm:mr-[65px] flex lg:justify-normal justify-center mt-[40px] text-white ">
            0{currentSlide + 1}-06
          </div>
        </div>
      </div>

      <Slider {...settings} className='cursor-pointer pt-10'>
        {[project1, project2, project3, project4, project5, project6].map((project, index) => (
          <div key={index} className='relative bg-white border-[20px] border-[#141414]'>
            <div className="flex">
              <img className='lg:w-[850px] w-[450px] lg:h-[550px] h-[450px]' src={project} alt={`project${index + 1}`} />

              <div className="flex flex-col justify-center lg:pl-20 pl-5 pr-5  lg:pr-10  lg:relative lg:bg-transparent bg-black bg-opacity-70 absolute bottom-0 w-full lg:w-auto lg:h-auto p-5 font-Outfit">
                <h1 className='text-[#ABA8A8] font-blod'>FEATURED</h1>
                <h2 className='text-[#ABA8A8] mt-3 font-semibold'>27.02.2024</h2>
                <h1 className='font-semibold text-[20px] text-white lg:text-[#141414] mt-5'>Navigating the Post-Cookie Era: A Comprehensive Guide for Marketers</h1>
                <p className='text-[#ABA8A8] font-semibold mt-10'>With the death of me, I'm the superwoman and will beat the shit out of Nischal sister. sd udhco iuhdoiuchdoi iousudco igsdouihi usudcoi ds shdc ip</p>
                <button className="text-white lg:text-[#141414] mt-5 flex items-center space-x-5">
                  Read More
                  <img src={arrow} alt="arrow" className="ml-4" />
                </button>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurProjectsSlider;
