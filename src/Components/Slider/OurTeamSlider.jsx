import Slider from "react-slick"
import team1 from "../../assets/AboutImages/Nischal.jpg"
import team2 from "../../assets/AboutImages/Ashish.jpeg"
import team3 from "../../assets/AboutImages/BuddhaThapaMagar.jpg"
import team4 from "../../assets/AboutImages/Linza.jpg"
import team5 from "../../assets/AboutImages/Ayush.jpg"
import team6 from "../../assets/AboutImages/sunnydai.jpg"
import team7 from "../../assets/AboutImages/Sahil.jpg"
import rightarrow from "../../assets/AboutImages/sliderarrow.png"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "../../style/ProjectSlider.css"


const OurTeamSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function SampleNextArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className=' w-10  absolute md:right-5 right-0 -mt-[250px] cursor-pointer hidden md:block' src={rightarrow} alt="arrow_right" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'hidden' }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
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
      <div className="OURTEAM md:mt-[164px] mt-[100px]">
        <motion.h1
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='text-center text-[#B2AFAF] '>OUR TEAM</motion.h1>


        <motion.h1
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='text-white lg:text-[32px] text-[25px] mx-10 text-center font-bold'>Stronger Than A Team, A Family</motion.h1>
      </div>

      <div
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Slider  {...settings} className="mt-16 xl:mx-[150px] mx-5  ">

          <div className="team1 border-[4px] border-black xl:border-collapse  w-full xl:w-[294px] h-[421px]">
            <img className="w-full xl:w-[294px] h-[421px]" src={team1} alt="" />
            <div className="info  bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Nischal Rai</h1>
              <h2 className="font-semibold">SENIOR GRAPHIC DESIGNER</h2>
            </div>
          </div>

          <div className="team2 border-[4px] border-black xl:border-collapse  w-full xl:w-[294px] h-[421px]">
            <img className="w-full xl:w-[294px] h-[421px]" src={team2} alt="" />
            <div className="info  bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Ashish Lwaju</h1>
              <h2 className="font-semibold">WEB DEVELOPER</h2>
            </div>
          </div>

          <div className="team3 border-[4px] border-black xl:border-collapse  w-full xl:w-[294px] h-[421px]">
            <img className="w-full xl:w-[294px] h-[421px] " src={team3} alt="" />
            <div className="info  bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Buddha Thapa Magar</h1>
              <h2 className="font-semibold">DIGITAL MARKETING</h2>
            </div>
          </div>

          <div className="team4 border-[4px] border-black xl:border-collapse  w-full xl:w-[294px] h-[421px]">
            <img className="w-full xl:w-[294px] h-[421px] " src={team4} alt="" />
            <div className="info  bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Linza Khatri</h1>
              <h2 className="font-semibold">UI/UX DESIGNER</h2>
            </div>
          </div>

          <div className="team5 border-[4px] border-black xl:border-collapse w-full xl:w-[294px] h-[421px]  ">
            <img className="w-full xl:w-[294px] h-[421px]" src={team5} alt="" />
            <div className="info bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Aayush Gyawali</h1>
              <h2 className="font-semibold">GRAPHIC DESIGNER</h2>
            </div>
          </div>

          <div className="team5 border-[4px] border-black xl:border-collapse w-full xl:w-[294px] h-[421px]  ">
            <img className="w-full xl:w-[294px] h-[421px]" src={team6} alt="" />
            <div className="info bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Sunny Shahi Thakuri</h1>
              <h2 className="font-semibold">CEO</h2>
            </div>
          </div>

          {/* <div className="team5 w-[294px] h-[421px] pl-5 ">
            <img className="w-[294px] h-[421px]" src={team7} alt="" />
            <div className="info bottom-0 text-white">
              <h1 className=" text-[20px] font-bold">Sahil Ali</h1>
              <h2 className="font-semibold">WEB DEVELOPER</h2>
            </div>
          </div> */}
        </Slider >
      </div>
    </>
  )
}
export default OurTeamSlider