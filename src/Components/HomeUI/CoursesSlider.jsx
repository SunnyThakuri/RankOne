import Slider from "react-slick"
import courses1 from "../../assets/HomeImages/Courses1.png"
import courses2 from "../../assets/HomeImages/Courses2.png"
import courses3 from "../../assets/HomeImages/Courses3.png"
import leftarrow from "../../assets/HomeImages/leftarrow.png"
import rightarrow from "../../assets/HomeImages/rightarrow.png"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom"
import "../../style/ProjectSlider.css"

const CoursesSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentSlide, setCurrentSlide] = useState(0);


  function SampleNextArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className=' w-10 absolute xl:-left-[525px] lg:-left-[325px] left-[120px] 2xl:-mt-[80px] lg:mt-[20px] md:-mt-[610px] sm:-mt-[525px] -mt-[545px]  cursor-pointer hidden sm:block' src={rightarrow} alt="arrow_right" />
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
        <img className=' w-10 absolute xl:-ml-[635px] left-0 lg:-ml-[435px] 2xl:bottom-[60px] lg:bottom-[-40px] -mt-[65px] cursor-pointer hidden sm:block' src={leftarrow} alt="arrow_left" />
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
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
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="Courses md:mt-[164px] mt-[120px]">

        <div className="left_side xl:w-[20%] lg:w-[30%]  lg:absolute xl:left-[80px] lg:left-[50px] xl:mt-[50px] lg:mt-[30px] font-Outfit">

          <motion.div
            ref={ref}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[#B2AFAF] lg:text-left text-center font-semibold font-Outfit">OUR COURSES</h1>
            <h1 className="text-white 2xl:text-[54px] text-[44px] font-bold  lg:text-left text-center font-Outfit">RANK ONE</h1>
            <h1 className="text-white 2xl:text-[54px] text-[44px] font-bold -mt-5  lg:text-left text-center font-Outfit">ACADEMY</h1>

          </motion.div>

          <motion.p
            ref={ref}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-[#B2AFAF] lg:px-0 px-[50px]  lg:text-left text-center font-Outfit">Bullet-proof strategy meets category-defining creative and flawless execution. Learn how Massive helps ambitious organizations move at the speed of culture.</motion.p>

          <div className="bnt flex  justify-center lg:justify-normal">
            <NavLink to='/courses'>
              <button className="border-2 border-[#B2AFAF] text-[#B2AFAF] px-10 py-2 mt-10  hover:border-white hover:text-white ">View All</button></NavLink>
          </div>
        </div>


      </div >

      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
      >

        <Slider {...settings} className="xl:ml-[700px] lg:ml-[500px] mx-10 lg:my-[100px] my-10 cursor-pointer gap-5 font-Outfit">

          <div className="slider1">
            <div className="images">
              <img className="w-full md:w-[350px]" src={courses1} alt="" />
            </div>
            <h1 className="text-white text-[24px] w-full font-bold mt-5 ">Graphic Design</h1>
            <div className="btn flex space-x-5 mt-3">
              <h1 className="text-[#B2AFAF]">VIEW</h1>
              <img className="h-3 lg:w-7 mt-2" src={rightarrow} alt="" />
            </div>
          </div>

          <div className="slider2">
            <div className="images">
              <img className="w-full md:w-[350px]" src={courses2} alt="" />
            </div>
            <h1 className="text-white text-[24px] font-bold mt-5 ">Animation</h1>
            <div className="btn flex space-x-5 mt-3">
              <h1 className="text-[#B2AFAF]">VIEW</h1>
              <img className="h-3 w-7 mt-2 " src={rightarrow} alt="" />
            </div>
          </div>


          <div className="slider3">
            <div className="images">
              <img className="w-full md:w-[350px]" src={courses3} alt="" />
            </div>
            <h1 className="text-white text-[24px] font-bold mt-5 ">Ui/Ux</h1>
            <div className="btn flex space-x-5 mt-3">
              <h1 className="text-[#B2AFAF]">VIEW</h1>
              <img className="h-3 w-7 mt-2" src={rightarrow} alt="" />
            </div>
          </div>
        </Slider>
      </motion.div >

      <div className="slidingnumber hidden lg:block 2xl:-mt-[200px] lg:-mt-[100px] -mt-[40px] text-[#FFFFFF] bottom-0 lg:ml-[100px] p-4  text-lg  font-Outfit">
        0{currentSlide + 1}- 03
      </div>

    </>
  )
}
export default CoursesSlider