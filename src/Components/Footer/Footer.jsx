import React from 'react'
import logo1 from "../../assets/HeaderImages/logo1.png"
import logo2 from "../../assets/HeaderImages/logo2.png"

const Footer = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="all_items mt-[50px] border-b-2 border-b-[#807688] sm:pb-8 pb-5 xl:mx-[80px] sm:ml-[50px] ml-5 xl:mr-[80px] sm:mr-[50px] mr-5">

          <div className="Logo flex my-5  ">
            <img src={logo1} alt="logo" />
            <img className='h-8 mt-4' src={logo2} alt="logo" />
          </div>

          <div className="left_items flex justify-between mt-10">
            <div className="product">
              <h1 className='mb-3 text-white font-semibold' >Product</h1>
              <p className='text-[#B2AFAF]'>Features</p>
              <p className='text-[#B2AFAF]'>Pricing</p>
            </div>

            <div className="compnay">
              <h1 className='mb-3 text-white font-semibold'>Company</h1>
              <p className='text-[#B2AFAF]'>About Us</p>
              <p className='text-[#B2AFAF]'>Testimonials</p>
              <p className='text-[#B2AFAF]'>FAQs</p>
            </div>

            <div className="Resources">
              <h1 className='mb-3 text-white font-semibold'>Resources</h1>
              <p className='text-[#B2AFAF]'>Blogs</p>
              <p className='text-[#B2AFAF]'>Community</p>
              <p className='text-[#B2AFAF]'>Sitemap</p>
            </div>
          </div>

          <div className="social_links flex justify-end space-x-5 sm:mt-5 mt-5">
            <p className='text-[#5B307D] text-[30px]'><i class="fa-brands fa-youtube"></i></p>
            <p className='text-[#5B307D] text-[30px]'><i class="fa-brands fa-x-twitter"></i></p>
            <p className='text-[#5B307D] text-[30px]'><i class="fa-brands fa-facebook"></i></p>
            <p className='text-[#5B307D] text-[30px]'><i class="fa-brands fa-discord"></i></p>
          </div>

        </div>

        <div className="copyright sm:flex justify-between xl:ml-[80px] sm:ml-[50px] ml-5 xl:mr-[80px] sm:mr-[50px] mr-5 text-[#B2AFAF] mt-5 mb-[50px] sm:space-y-0 space-y-5">
          <p>@Rankone 2024, All Rights Reserved</p>
          <p>Provacy Policy | Terms of Service</p>
        </div>
      </div >
    </>
  )
}
export default Footer