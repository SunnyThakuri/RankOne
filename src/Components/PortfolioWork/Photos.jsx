import React, { useEffect } from 'react'
import photos01 from "../../assets/PortfolioImages/photo1.png"
import photos02 from "../../assets/PortfolioImages/photo2.png"
import photos03 from "../../assets/PortfolioImages/photo3.png"
import photos04 from "../../assets/PortfolioImages/photo4.png"
import photos05 from "../../assets/PortfolioImages/photo5.png"
import photos06 from "../../assets/PortfolioImages/photo6.png"
import Aos from 'aos'
import "aos/dist/aos.css"

const Photos = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])
  return (
    <>
      <div className="Design_Branding text-white">
        <h1 className="text-white text-[22px] ">Photos</h1>

        <div className="images mt-5 grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">


          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img className='w-[320px] h-[300px]' src={photos01} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | MANDALA </p>
            <h2 className='text-[18px]'>Mandala</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img className='w-[320px] h-[300px]' src={photos02} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CARTOON</p>
            <h2 className='text-[18px]'>Cartoon</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <img className='w-[320px] h-[300px]' src={photos03} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | CONCEPT ART</p>
            <h2 className='text-[18px]'>
              Concept Art
            </h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img className='w-[320px] h-[300px]' src={photos04} alt="" />
            <p className='text-[#808080] mt-3'>GRAPHIC DESIGN | DIGITAL ART</p>
            <h2 className='text-[18px]'>Digital Art</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img className='w-[320px] h-[300px]' src={photos05} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN |APE ILLUSTRATION</p>
            <h2 className='text-[18px] '>Ape Illustration</h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img className='w-[320px] h-[300px]' src={photos06} alt="" />
            <p className='text-[#808080] text-[12px]'>GRAPHIC DESIGN |APE ILLUSTRATION</p>
            <h2 className='text-[18px] '>Ape Illustration</h2>
          </div>


        </div>
      </div>
    </>
  )
}
export default Photos