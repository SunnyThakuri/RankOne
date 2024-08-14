import React, { useEffect, useRef } from 'react'
import AboutUsImg01 from "../assets/AboutImages/AboutBgImage.png"
import AboutUsImg02 from "../assets/AboutImages/AboutUsImg02.png"
import AboutUsImg03 from "../assets/AboutImages/AboutUsImg03.png"
import AboutUsImg04 from "../assets/AboutImages/AboutImg04.png"
import AboutUsImg05 from "../assets/AboutImages/AboutImg05.png"
import AboutUsImg06 from "../assets/AboutImages/AboutImg06.png"

import gallery01 from "../assets/AboutImages/aboutgalley01.png"
import gallery02 from "../assets/AboutImages/aboutgalley02.png"
import gallery03 from "../assets/AboutImages/aboutgalley03.png"
import gallery04 from "../assets/AboutImages/aboutgalley04.png"
import gallery05 from "../assets/AboutImages/aboutgalley05.png"
import gallery06 from "../assets/AboutImages/aboutgalley06.png"
import gallery07 from "../assets/AboutImages/aboutgalley07.png"
import gallery08 from "../assets/AboutImages/aboutgalley08.png"
import gallery09 from "../assets/AboutImages/aboutgalley09.png"

import one from "../assets/AboutImages/001.png"
import two from "../assets/AboutImages/002.png"
import three from "../assets/AboutImages/003.png"
import four from "../assets/AboutImages/004.png"
import five from "../assets/AboutImages/005.png"
import six from "../assets/AboutImages/006.png"



import telegramicon from "../assets/AboutImages/telegramicon.png"
import OurTeamSlider from '../Components/Slider/OurTeamSlider'
import { motion, useInView } from "framer-motion"
import { NavLink } from 'react-router-dom'
import AboutClient from '../Components/Slider/AboutClient'
import AboutClientRight from '../Components/Slider/AboutClientRight'



const About = () => {
  const introRef = useRef(null);
  const galleryRef = useRef(null);
  const partnerRef = useRef(null);
  const valuesRef = useRef(null);
  const hiringRef = useRef(null);
  const excitedRef = useRef(null);

  const introInView = useInView(introRef, { once: true });
  const galleryvIEW = useInView(galleryRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });
  const partnerInView = useInView(partnerRef, { once: true });
  const hiringInView = useInView(hiringRef, { once: true });
  const excitedView = useInView(excitedRef, { once: true });


  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="aboutus md:pt-[200px] pt-[150px]  ">
          {/* --------------INTRO---------------- */}
          <div ref={introRef} className="sub-heading font-Outfit md:flex  lg:px-[100px] sm:px-[50px] px-5 overflow-hidden">

            <div
              className="left_side_text lg:w-[50%] md:w-[70%] sm:w-[80%] xl:pr-[50px]">

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='text-[#B2AFAF]'>ABOUT US</motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className='text-white xl:text-[54px] lg:text-[40px] md:text-[30px] text-[25px] font-bold'>Ingenious products  </motion.p>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className='text-white xl:text-[54px] lg:text-[40px] md:text-[30px] text-[25px] font-bold xl:-mt-5'>driven by transparent</motion.p>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className='text-white xl:text-[54px] lg:text-[40px] md:text-[30px] text-[25px] font-bold xl:-mt-5'>relationships</motion.p>
            </div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={introInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="right_side_photo lg:w-[50%] xl:pl-[150px] sm:pl-[55px] sm:pt-0 pt-10 grid grid-cols-3 overflow-hidden relative mt-[30px]">

              <div className="img01 and img04 relative">
                <div className="aboutImg01">
                  <img className='lg:w-[200px] md:w-[150px] h-[150px]' src={AboutUsImg01} alt="" />
                </div>
                <div className="img04 h-[200px] relative">
                  <img className='xl:w-[200px] md:w-[150px] h-[130px]' src={AboutUsImg04} alt="" />
                </div>
              </div>

              <div className="img02 row-span-3 relative">
                <img className=' h-[280px]' src={AboutUsImg02} alt="" />
              </div>

              <div className="img03 and img06 -ml-10 relative">
                <img className='w-[150px]' src={AboutUsImg03} alt="" />
                <img className='w-[150px]' src={AboutUsImg06} alt="" />
                <img className='w-[150px]' src={AboutUsImg05} alt="" />
              </div>
            </motion.div>
          </div>


          {/* -------------GALERY IMAGES--------------------- */}

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={introInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            className="galleryImages  bg-[#1E1E1E] md:mt-[164px] mt-[120px] lg:mb-[200px] overflow-hidden relative">

            <div className="imges grid lg:grid-cols-3 sm:grid-cols-2 lg:px-[100px] px-5 lg:gap-5   z-50">

              <div className="img09 ">
                <img className='lg:absolute lg:-mt-20 
              lg:w-[350px] xl:w-[420px] 2xl:w-[550px] 
              lg:h-[300px] xl:h-[350px] 2xl:h-[400px] w-full h-full' src={gallery09} alt="" />
              </div>

              <div className="img08 w-full h-full lg:w-[400px] xl:w-[420px] lg:h-[100px]   lg:pl-5 ">
                <img className='lg:mt-5 w-full xl:h-[150px] 2xl:w-[500px] h-full' src={gallery08} alt="" />
              </div>

              <div className="img07 2xl:w-[450px] lg:row-span-2 ">
                <img className=' lg:pl-10 w-full h-full 
              lg:h-[300px] xl:h-[400px] 2xl:h-[490px] xl:-ml-12 ' src={gallery07} alt="" />
              </div>

              <div className="img06  ">
                <img className='lg:w-[380px] xl:w-[400px] w-full h-full' src={gallery06} alt="" />
              </div>


              <div className="h-full w-full flex">
                <div className="img05 xl:mt-20 h-full ">
                  <img className='lg:absolute lg:-ml-16 
                2xl:w-[500px] lg:w-[390px] xl:w-[450px]   
                lg:h-[450px] xl:h-[620px] 2xl:h-[610px] h-full ' src={gallery05} alt="" />
                </div>

                <div className="about_text absolute 2xl:w-[550px] w-[400px] 2xl:right-[150px] xl:right-[150px] lg:right-10 2xl:mt-[400px] xl:mt-[250px] lg:mt-[210px]  hidden lg:block">
                  <p className='text-white bg-[#1E1E1E] rounded-[8px] 2xl:px-14  px-5 2xl:pt-10 lg:pt-5 2xl:pb-12 lg:pb-5'>Rank One create dynamic websites, user-friendly mobile apps, and captivating designs tailored to your brand. Our team delivers innovative solutions that exceed expectations and elevate your digital presence. Contact us to rank above the competition.</p>
                </div>
              </div>

              <div className="img03">
                <div className="img04 w-full">
                  <img className=' w-full lg:w-[220px] xl:w-[400px]' src={gallery04} alt="" />
                </div>
                <img className=' w-full lg:w-[400px]' src={gallery03} alt="" />
              </div>


              <div className="img02 lg:pt-5  xl:mt-5">
                <img className='lg:absolute 2xl:w-[500px] lg:w-[390px]  xl:w-[450px] lg:-ml-[120px] xl:-ml-[200px] lg:h-[440px] xl:h-[640px] 2xl:h-[650px] h-full' src={gallery02} alt="" />
              </div>

              <div className="img01 2xl:w-[530px] xl:w-[450px] lg:w-[420px]">
                <img className=' h-full w-full   lg:mt-10  lg:-ml-[150px] 2xl:h-[600px]' src={gallery01} alt="" />
              </div>

            </div>
          </motion.div>


          {/* --------------------OUR VALUES------------------ */}
          <div ref={valuesRef} className="our_values font-Outfit md:mt-[164px] mt-[120px]">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={valuesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}>
              <h1 className='text-[#B2AFAF] text-center'>OUR VALUES</h1>
              <h1 className='text-white font-bold xl:text-[40px] md:text-[35px] text-[30px] text-center mx-10'>The Good Stuff we strongly believe in</h1>
            </motion.div>

            <div className="values grid xl:grid-cols-3 sm:grid-cols-2 gap-10 mt-14 xl:mx-[80px] md:mx-[50px] mx-[20px]">

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="transperanacy flex space-x-5">
                <img className='w-[20px] h-[20px] mt-3' src={one} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px] font-bold'>TRANSPERANCY</h1>
                  <p className='text-[#B2AFAF] text-justify lg:w-[341px] w-[300px]'>Rank One pulls back the curtain by giving internal and external partners insight into our processes and engaging them in our operation.</p>
                </div>
              </motion.div>

              <motion.div

                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                className="Accountability flex space-x-5">
                <img className='w-[10px] h-[20px]  mt-3' src={two} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px] font-bold'>ACCOUNTABILITY</h1>
                  <p className='text-[#B2AFAF] text-justify lg:w-[341px] w-[300px]'>At Rank One, we align ourselves with partner outcomes by monitoring and measuring our delivery commitments.</p>
                </div>
              </motion.div>

              <motion.div

                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                className="Work Ethic flex space-x-5">
                <img className='w-[20px] h-[20px]  mt-3' src={three} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px] font-bold'>WORK ETHICSS</h1>
                  <p className='text-[#B2AFAF] text-justify lg:w-[341px] w-[300px]'>Quality work comes from being intentional and deliberate. We focus on creating effective digital marketing strategies.</p>
                </div>
              </motion.div>

              <motion.div

                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="Curosity flex space-x-5">
                <img className='w-[10x] h-[20px]  mt-3' src={four} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px] font-bold'>CUROSITY</h1>
                  <p className='text-[#B2AFAF] text-justify lg:w-[341px] w-[300px]'>We pay for certifications in project management, sales operations, and more from platforms like Magento, Google, and Salesforce.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                className="Innovation flex space-x-5">
                <img className='w-[10px] h-[20px]  mt-3' src={five} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px]font-bold'>INNOVATION</h1>
                  <p className='text-[#B2AFAF] lg:w-[341px] w-[300px] text-justify'>We embrace and look for individuals looking to drive change and uncover what the future holds for digital products.</p>
                </div>
              </motion.div>


              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="Authenticity flex space-x-5">
                <img className='w-[10px] h-[20px]  mt-3' src={six} alt="" />
                <div className="text">
                  <h1 className='text-white lg:text-[32px] text-[25px] font-bold'>AUTTHENTICITY</h1>
                  <p className='text-[#B2AFAF] lg:w-[341px] w-[300px] text-justify'>For Us, being authentic means we are honest and real , we are trusted and counted on. And it can mean all the difference in your success.</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* -----------------PARTNERS--------------------- */}

          <div ref={partnerRef} className="PARTNERS md:mt-[164px] mt-[120px]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={partnerInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className='text-center text-[#B2AFAF] '>PARTNERS</h1>
              <h1
                className='text-[#B2AFAF] xl:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] mx-5 text-center font-bold'>Making Each Of Our Clients Happy, One Project At A Time.</h1>
            </motion.div>
            <AboutClient />
            <AboutClientRight />

          </div>


          {/* ------------------------OUR TEAM-------------------- */}
          <OurTeamSlider />

          {/* ---------HIRING----------- */}
          <div ref={hiringRef} className="hiring_section md:mt-[164px] mt-[120px] font-Outfit">

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={hiringInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className='text-center text-[#B2AFAF] '>WE'RE HIRING</h1>
              <h1 className='text-white text-[32px] text-center font-bold'>Join Our Team</h1>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={hiringInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className='text-center text-[#B2AFAF] sm:mx-auto sm:max-w-[650px] my-12'>Join our team of innovative professionals creating captivating experiences. Be a part of our dynamic environment and apply for open positions to contribute your skills. Join Rank One's journey to make a difference in the digital world.</motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={hiringInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              className="mail sm:text-center text-white flex justify-center space-x-3 text-[18px] sm:ml-0 mx-12">
              <img className='h-5 w-5 mt-1 ' src={telegramicon} alt="" />
              <h1>Submit your application to <b>rankonepro@gmail.com </b> via email</h1>
            </motion.div>
          </div>

          {/* ---------------EXCITED -------------- */}

          <div ref={excitedRef} className="joinus_section font-Outfit ">
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={excitedView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}>
              <h1 className='text-center text-[#B2AFAF] mt-[100px]'>EXCITED!</h1>
              <h1 className='2xl:text-[82px] xl:text-[72px] 
          md:text-[62px] sm:text-[42px] text-[32px] text-center md:mx-auto mx-10 md:w-[900px]  text-white font-bold'>Let's build or improve your digital product</h1>
            </motion.div>


            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={excitedView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
              className="bnts flex sm:flex-row flex-col sm:justify-center mt-20 sm:space-x-10  items-center sm:space-y-0 space-y-4"
            >
              <button className="border-2 border-[#B2AFAF] hover:border-white hover:text-white text-[#B2AFAF] px-5 py-2">
                Book a 15-min call
              </button>
              <NavLink to='/contact'><button className="bg-white px-12 py-2">Contact us</button></NavLink>
            </motion.div>

          </div>


        </div >


      </div >

    </>
  )
}
export default About