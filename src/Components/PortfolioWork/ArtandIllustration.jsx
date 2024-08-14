import React, { useEffect } from 'react'
import cartoonart from "../../assets/PortfolioImages/cartoon1.jpg"
import mandala from "../../assets/PortfolioImages/mandala.png"
import football from "../../assets/PortfolioImages/FOOTBALL.jpg"
import conceptart from "../../assets/PortfolioImages/conceptart.png"
import digitalart from "../../assets/PortfolioImages/digitalart.jpg"
import apeillustration from "../../assets/PortfolioImages/apeillustration.jpg"

import Aos from 'aos'
import "aos/dist/aos.css"


const ArtandIllustration = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])
  return (
    <>
      <div className="Design_Branding text-white">
        <h1 className="text-white text-[22px] ">App Development</h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          <div data-aos="fade-left" data-aos-delay="300" className="">
            <img className='w-[320px] h-[300px]' src={cartoonart} alt="" />
            <p className='text-[#808080] mt-3'>DESING |CARTOON </p>
            <h2 className='text-[18px]'>Cartoon Art</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img className='w-[320px] h-[300px]' src={mandala} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | MANDALA </p>
            <h2 className='text-[18px]'>Mandala</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img className='w-[320px] h-[300px]' src={football} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CARTOON</p>
            <h2 className='text-[18px]'>Cartoon</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <img className='w-[320px] h-[300px]' src={conceptart} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CONCEPT ART</p>
            <h2 className='text-[18px]'>
              Concept Art
            </h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img className='w-[320px] h-[300px]' src={digitalart} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | DIGITAL ART</p>
            <h2 className='text-[18px]'>Digital Art</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img className='w-[320px] h-[300px]' src={apeillustration} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN |APE ILLUSTRATION</p>
            <h2 className='text-[18px] '>Ape Illustration</h2>
          </div>

        </div>
      </div>
    </>
  )
}
export default ArtandIllustration