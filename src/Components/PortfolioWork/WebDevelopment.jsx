import React, { useEffect } from 'react'
import design01 from "../../assets/PortfolioImages/web/DKRecruitment.png"
import design02 from "../../assets/PortfolioImages/web/RamSynergic.png"
import design03 from "../../assets/PortfolioImages/web/RankOne.png"

import Aos from 'aos'
import "aos/dist/aos.css"

const WebDevelopment = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])
  return (
    <>
      <div className="Design_Branding text-white">
        <h1 className="text-white text-[22px] ">Web Development</h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 gap-3">
          <div data-aos="fade-left" data-aos-delay="300" className="">
            <img src={design01} alt="" />
            <h2 className='text-[18px]'>DKRecruitment</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img src={design02} alt="" />
            <h2 className='text-[18px]'>Web Desing| RamSynergic</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design03} alt="" />
            <h2 className='text-[18px]'>RANK ONE PRO</h2>
          </div>

        </div>
      </div>
    </>
  )
}
export default WebDevelopment