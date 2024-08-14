import React from 'react'
import img1 from "../../assets/HomeImages/homesliderimg1.png"
import img2 from "../../assets/HomeImages/homesliderimg2.png"
import img3 from "../../assets/HomeImages/homesliderimg3.png"
import img4 from "../../assets/HomeImages/homesliderimg4.png"
import img5 from "../../assets/HomeImages/homesliderimg5.png"
import img6 from "../../assets/HomeImages/homesliderimg6.png"
import img7 from "../../assets/HomeImages/homesliderimg7.png"
import img8 from "../../assets/HomeImages/homesliderimg8.png"
import img9 from "../../assets/HomeImages/homesliderimg9.png"
import img10 from "../../assets/HomeImages/homesliderimg10.png"
import img11 from "../../assets/HomeImages/homesliderimg11.png"
import img12 from "../../assets/HomeImages/homesliderimg12.png"
import img14 from "../../assets/HomeImages/homesliderimg14.png"
import Slider from 'react-slick'


const HomeSlider1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: 'linear',
    rtl: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
      <div className="all_items">

        <Slider {...settings} className='md:mt-[164px] mt-[120px] '>
          <div className="slider1 border-[8px] border-black md:h-[532px] h-[332px]">
            <img src={img1} alt="" />
            <img src={img10} alt="" />
          </div>

          <div className="slider2 border-[8px] border-black md:h-[532px] h-[332px]" >
            <img src={img3} alt="" />
            <img src={img8} alt="" />
          </div>

          <div className="slider3 border-[8px] border-black md:h-[532px] h-[332px]">
            <img src={img4} alt="" />
            <img src={img7} alt="" />
          </div>
          <div className="slider4 border-[8px] border-black md:h-[532px] h-[332px]">
            <img src={img1} alt="" />
            <img src={img6} alt="" />
          </div>

          <div className="slider5 border-[8px] border-black md:h-[532px] h-[332px]">
            <img className='' src={img2} alt="" />
            <img src={img11} alt="" />
            <img className='' src={img14} alt="" />
          </div>

          <div className="slider6 border-[8px] border-black md:h-[532px] h-[332px]">
            <img src={img5} alt="" />
            <img src={img9} alt="" />
            <img src={img12} alt="" />

          </div>


        </Slider >
      </div >
    </>
  )
}
export default HomeSlider1