import React, { useEffect } from 'react'
import design01 from "../../assets/PortfolioImages/BrandAndDesign/img1.png"
import design02 from "../../assets/PortfolioImages/BrandAndDesign/img2.png"
import design03 from "../../assets/PortfolioImages/BrandAndDesign/img3.png"
import design04 from "../../assets/PortfolioImages/BrandAndDesign/img4.png"
import design05 from "../../assets/PortfolioImages/BrandAndDesign/img5.png"
import design06 from "../../assets/PortfolioImages/BrandAndDesign/img6.png"
import design07 from "../../assets/PortfolioImages/BrandAndDesign/img7.png"
import design08 from "../../assets/PortfolioImages/BrandAndDesign/img8.png"
import design09 from "../../assets/PortfolioImages/BrandAndDesign/img9.png"
import design10 from "../../assets/PortfolioImages/BrandAndDesign/img10.png"
import design11 from "../../assets/PortfolioImages/BrandAndDesign/img11.png"
import design12 from "../../assets/PortfolioImages/BrandAndDesign/img12.png"
import design13 from "../../assets/PortfolioImages/BrandAndDesign/img13.png"
import design14 from "../../assets/PortfolioImages/BrandAndDesign/img14.png"
import design15 from "../../assets/PortfolioImages/BrandAndDesign/img15.png"
import design16 from "../../assets/PortfolioImages/BrandAndDesign/img16.png"
import design17 from "../../assets/PortfolioImages/BrandAndDesign/img17.png"
import design18 from "../../assets/PortfolioImages/BrandAndDesign/img18.png"
import design19 from "../../assets/PortfolioImages/BrandAndDesign/img19.png"
import design20 from "../../assets/PortfolioImages/BrandAndDesign/img20.png"
import design21 from "../../assets/PortfolioImages/BrandAndDesign/img21.png"
import design22 from "../../assets/PortfolioImages/BrandAndDesign/img22.png"
import design23 from "../../assets/PortfolioImages/BrandAndDesign/img23.png"
import design24 from "../../assets/PortfolioImages/BrandAndDesign/img24.png"
import Aos from 'aos'
import "aos/dist/aos.css"

const Design = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, [])
  return (
    <>
      <div className="Design_Branding text-white">
        <h1 className="text-white text-[22px] ">Design & Branding</h1>

        <div className="images mt-5 grid lg:grid-cols-4 grid-cols-2 gap-3">
          <div data-aos="fade-left" data-aos-delay="300" className="">
            <img src={design01} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img src={design02} alt="" />

          </div>

          <div data-aos-delay="700" data-aos="fade-left" className="">
            <img src={design03} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <img src={design04} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="">
            <img src={design05} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design06} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design07} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design08} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design09} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design10} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design11} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design12} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design13} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design14} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design15} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design16} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design17} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design18} alt="" />
          </div>



          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design19} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design20} alt="" />
          </div>


          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design21} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design22} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design23} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-delay="700" className="">
            <img src={design24} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}
export default Design