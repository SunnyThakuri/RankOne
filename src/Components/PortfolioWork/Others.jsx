import React, { useEffect } from 'react'
import design01 from "../../assets/PortfolioImages/Desig01.png"
import design02 from "../../assets/PortfolioImages/Design02.png"
import design03 from "../../assets/PortfolioImages/Design03.png"
import design04 from "../../assets/PortfolioImages/Design04.png"
import design05 from "../../assets/PortfolioImages/Design05.png"
import design06 from "../../assets/PortfolioImages/Design06.png"
import Aos from 'aos'
import "aos/dist/aos.css"

const Others = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])
  return (
    <>
      <div className="Design_Branding text-white">
        <h1 className="text-white text-[22px] ">Others</h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          <div data-aos="fade-left" data-aos-delay="300" className="">
            <img src={design01} alt="" />
            <p className='text-[#808080] mt-3'>DESING | BRANDING </p>
            <h2 className='text-[18px]'>Biryani Moments</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img src={design02} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>Social|Media Posts for Biryani Moments</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design03} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <img src={design04} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA</p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img src={design05} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | SOCIAL MEDIA </p>
            <h2 className='text-[18px]'>99Nepal lenovo Ideapad</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design06} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN | SOCIAL MEDIA</p>
            <h2 className='text-[18px] '>99Nepal lenovo Ideapad</h2>
          </div>

        </div>
      </div>
    </>
  )
}
export default Others