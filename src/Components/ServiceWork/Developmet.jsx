import React, { useRef } from 'react'
import borderline from "../../assets/ServiceLogoDesign/Line 8.png"
import arrow from "../../assets/ServiceLogoDesign/Line 1.png"
import logodesign01 from "../../assets/ServiceLogoDesign/service_log1.png"
import logodesign02 from "../../assets/ServiceLogoDesign/Service_logo2.png"
import logodesign03 from "../../assets/ServiceLogoDesign/service_logo3.png"
import logodesign04 from "../../assets/ServiceLogoDesign/service_logo4.png"
import logodesign05 from "../../assets/ServiceLogoDesign/service_logo5.png"
import quotation from "../../assets/ServiceLogoDesign/Quotation.png"

import strategyimg01 from "../../assets/ServiceLogoDesign/Service_StrategyImg01.png"
import strategyimg02 from "../../assets/ServiceLogoDesign/Service_StrategyImg02.png"
import strategyimg03 from "../../assets/ServiceLogoDesign/Service_StrategyImg03.png"
import strategyimg04 from "../../assets/ServiceLogoDesign/service_logo4.png"
import BuildImg01 from '../../assets/ServiceLogoDesign/Service_buildImg01.png'
import BuildImg02 from '../../assets/ServiceLogoDesign/Service_buildImg02.png'
import BuildImg03 from '../../assets/ServiceLogoDesign/Service_buildImg03.png'

import serviceuserimg from "../../assets/ServiceLogoDesign/Service_userImg (1).png"

import canvalogo from "../../assets/ServiceLogoDesign/Canva_logo.png"
import guccilogo from "../../assets/ServiceLogoDesign/Gucci_logo.png"
import delllogo from "../../assets/ServiceLogoDesign/Dell_logo.png"
import harvardlogo from "../../assets/ServiceLogoDesign/Harvarduniverstiy_logo.png"
import jagurlogo from "../../assets/ServiceLogoDesign/Jagur_logo.png"
import oktalogo from "../../assets/ServiceLogoDesign/Okta_logo.png"
import zendesklogo from "../../assets/ServiceLogoDesign/Zendesk_logo.png"
import Kraftlogo from "../../assets/ServiceLogoDesign/Kraft_logo.png"
import deloittelogo from "../../assets/ServiceLogoDesign/Deloitte_logo.png"

import serviceCustomer01 from "../../assets/ServiceLogoDesign/Service_customerImg01.png"
import serviceCustomer02 from "../../assets/ServiceLogoDesign/Service_CutomerImg02.png"
import serviceCustomer03 from "../../assets/ServiceLogoDesign/Service_CustomerImg03.png"
import serviceCustomer04 from "../../assets/ServiceLogoDesign/Service_CustomerImg04.png"
import serviceCustomer05 from "../../assets/ServiceLogoDesign/Service_CustomerImg05.png"
import serviceCustomer06 from "../../assets/ServiceLogoDesign/Service_CustomerImg06.png"
import thunderlogo from "../../assets/ServiceLogoDesign/thunder.png"
import { useInView } from 'framer-motion'
import { motion } from "framer-motion"

const Development = () => {
  const introRef = useRef(null);
  const roiRef = useRef(null);
  const contentRef = useRef(null);
  const strategyRef = useRef(null);
  const authenticRef = useRef(null);
  const readyRef = useRef(null);
  const successRef = useRef(null);
  const contactRef = useRef(null);

  const introInView = useInView(introRef, { once: true });
  const roiInView = useInView(roiRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const strategyInView = useInView(strategyRef, { once: true });
  const authenticInView = useInView(authenticRef, { once: true });
  const readyInView = useInView(readyRef, { once: true });
  const successInView = useInView(successRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  return (
    <>
      <div className="logodesignService bg-[#141414] -mt-20">

        <div ref={introRef} className="SUB-HEADING">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={introInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[#B2AFAF] text-center pt-[200px] ">SERVICES</h1>
            <h1 className="xl:text-[72px] lg:text-[72px] md:text-[52px] sm:text-[42px] text-[30px] text-center font-bold font-Outfit text-white ">Drive ROI with Data-</h1>

            <h1 className='xl:text-[72px] lg:text-[62px] md:text-[52px] sm:text-[42px] text-[30px] text-center font-bold font-Outfit text-white lg:-mt-11 sm:-mt-8  -mt-5'>Driven Content</h1>
            <div className="border-line flex justify-center">
              <img src={borderline} alt="" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={introInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="text">
            <p className='text-[#BBBBBB] text-center text-[20px] mt-[50px] sm:mx-auto sm:w-[516px] '>We create data-driven content that tells your brand’s unique narrative at every digital touchpoint.</p>
          </motion.div>

          <div className="SCROLL  mt-20">
            <h1 className='text-[#B2AFAF] text-center'>SCROLL TO EXPLORE </h1>
            <div className="down_arrow flex justify-center mt-5">
              <img className='animate-bounce' src={arrow} alt="" />
            </div>
          </div>
        </div>

        {/* -------------ROI SECTION----------------- */}
        <div ref={roiRef} className="items lg:flex mt-[100px]  ">
          <div className="left_side xl:ml-[60px] lg:ml-[40px] 
           xl:mr-[650px] lg:mr-[480px] 2xl:mr-[550px] ">

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={roiInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1
                className='2xl:text-[54px] xl:text-[42px] lg:text-[38px] text-[35px] font-Outfit text-white font-bold text-center lg:text-left '>Increase ROI with </h1>
              <h1 className='2xl:text-[54px] xl:text-[42px] lg:text-[38px] font-Outfit text-white font-bold 2xl:-mt-9 xl:-mt-7 -mt-5  text-center lg:text-left text-[35px]'>Compeling Content</h1>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={roiInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className='text-white mt-3  lg:w-[636px] lg:text-left text-center lg:ml-0 md:ml-[100px] sm:ml-[70px] ml-10 lg:mr-0  md:mr-[100px] sm:mr-[80px] mr-7'>The key to success in content marketing is high-quality content that inspires your audience to take action. And with our talented copywriters and designers, we’ll help you create content that comes to life on each page — boosting engagement and building valuable connections that lead to more bottom-line sales for your business.</motion.p>

            .
            <div className="quotation_logo absolute mt-11 lg:ml-10 md:ml-[150px] sm:ml-[100px] ml-[50px] ">
              <img className='' src={quotation} alt="" />
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={roiInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="quotation_text bg-[#1E1E1E] border-2 border-[#3C3C3C] font-Outfit px-8 py-6 rounded-[25px] mt-16 md:mx-[100px] sm:mx-[50px] mx-3 lg:mx-0">

              <p className='text-[#B2AFAF] text-[18px] w-[569px]'>“DZ has been instrumental in not only growing our brand in the US, but has also increased our product and brand awareness within the Western Hemisphere. Not only did we gain a new, user-friendly website; Spider Mower USA gained a valuable team of dedicated digital-marketing, business growth professionals by partnering with Designzillas.”</p>

              <p className='text-[#B2AFAF] text-[18px] mt-5'>— Spider Mower USA</p>
            </motion.div>
          </div>


          <div className="right_side 2xl:mt-10 mt-[100px] lg:mb-0 mb-[300px]">
            <div className="logodesign2 flex justify-center ">
              <img className='lg:absolute 2xl:right-[80px] xl:right-[60px] right-[40px]  xl:w-[350px] lg:w-[300px] md:ml-0 ml-12' src={logodesign02} alt="" />
            </div>

            <div className="logodesign4   ">
              <img className=' absolute 2xl:right-[310px] xl:right-[290px] lg:right-[230px] xl:w-[200px] lg:w-[180px]  xl:mt-[120px] lg:mt-[100px] -mt-[80px] md:ml-[150px] sm:ml-[80px] ml-[30px]' src={logodesign04} alt="" />
            </div>

            <div className="logodesign3 ">
              <img className='absolute 2xl:right-[160px] xl:right-[140px] lg:right-[100px] md:right-[330px] sm:right-[180px] right-[130px]  lg:w-[150px] w-[180px]  xl:mt-[180px] lg:mt-[160px] -mt-[30px] ' src={logodesign03} alt="" />
            </div>

            <div className="logodesign1 ">
              <img className='absolute 2xl:right-[80px] xl:right-[50px] lg:right-[25px] md:right-[240px] sm:right-[100px] right-[50px] lg:w-[80px] w-[90px]  xl:mt-[200px] lg:mt-[180px]' src={logodesign01} alt="" />
            </div>

            <div className="logodesign5 ">
              <img className=' absolute 2xl:right-[270px] xl:right-[250px] lg:right-[200px] md:right-[450px] sm:right-[320px] right-[280px] w-[150px]  xl:mt-[230px] lg:mt-[200px]' src={logodesign05} alt="" />
            </div>
          </div>
        </div>

        {/* ---------------CONTENT MARKETING--------------- */}
        <div ref={contentRef} className="Content mt-[200px] font-Outfit">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={contentInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-center font-Outfit xl:text-[54px] md:text-[40px] text-[30px] text-white font-bold'>Our Content Marketing Capabilities</motion.h1>

          <div className="about_content grid lg:grid-cols-3 sm:grid-cols-2  2xl:mx-[100px] xl:mx-[50px] mx-[20px] gap-10  mt-10">

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="implementation bg-[#1E1E1E] border-[0.5px] border-white font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white  font-semibold'>CMS Implementation</h1>

              <p className='text-[#B2AFAF] mt-5'>Optimize your content management system for seamless scalability and alignment with your business objectives. Our expert team will assess and enhance your CMS to meet your specific needs.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="Topic   bg-[#1E1E1E] border-[0.5px] border-white font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white font-semibold ' >Topic Research</h1>
              <p className=' text-[#B2AFAF] mt-5'>Boost your industry authority with data-driven content. Our team conducts competitor analysis, gathers customer insights, and collaborates with your sales team
                to create compelling FAQs content.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="development  bg-[#1E1E1E] border-t-[0.1px]  border-b-[0.5px] border-white p-4e font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white font-semibold'>Creative Development</h1>
              <p className='text-[#B2AFAF] mt-5'>Our talented content team expertly captures your brand's unique look and feel in all supporting assets, ensuring a consistent, memorable, and engaging experience
                for your valued customers.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="generatingcontent  bg-[#1E1E1E] border-[0.5px] border-white font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white font-semibold'>Lead-Generating Content Creation</h1>
              <p className='text-[#B2AFAF] mt-5'>Attract top-of-funnel leads with tailored premium content. From white papers to infographics, we'll create content that resonates with your market.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="video  bg-[#1E1E1E] border-[0.5px] border-white font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white font-semibold'>Video</h1>
              <p className='text-[#B2AFAF] mt-5'>Capture attention with stunning, high-quality videos from our creative studio. Engage customers through compelling visual storytelling and convey your brand's
                powerful narrative.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
              className="blog  bg-[#1E1E1E] border-[0.5px] border-white font-Outfit px-8 py-6 rounded-[25px] ">
              <h1 className='text-[24px] text-white font-semibold'>Blogging</h1>
              <p className='text-[#B2AFAF] mt-5'>Revitalize your content marketing strategy with SEO-driven blog content featuring captivating custom imagery and a comprehensive approach that
                covers the entire customer journey seamlessly.</p>
            </motion.div>
          </div>
        </div>

        {/* ---------------strategy Section ------------ */}


        <div ref={strategyRef} className="Sevice_Stragey_section font-Outfit lg:flex xl:mx-[80px] lg:mx-[50px] mt-[100px]">

          <div ref={strategyRef} className="Left_side  ">

            <div className="Strategy 2xl:mr-[350px] xl:mr-[150px]">

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={strategyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}>
                <h1 className='text-white md:text-[54px] text-[38px] font-bold lg:text-left text-center'>From Strategy</h1>
                <h1 className='text-white md:text-[54px] text-[38px] font-bold -mt-5 lg:text-left text-center'>to Execution</h1>
              </motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={strategyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className='text-[#B2AFAF] lg:ml-0 sm:ml-[100px] ml-[20px] lg:mr-[400px] sm:mr-[100px] mr-[20px] lg:text-left text-center'>Crafting compelling content strategies that align with
                your brand’s goals and resonate with your
                target audience.</motion.p>
            </div>


            <div className="down_text 2xl:mr-[600px] lg:mr-[420px] lg:mx-0 sm:mx-[50px] mx-[20px]">

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={strategyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                className="StoryTelling flex space-x-4 lg:mt-5 mt-12">
                <img className='w-5 h-10' src={thunderlogo} alt="" />
                <div className="text flex flex-col">
                  <h1 className='text-white text-[22px]'>Engaging Storytelling</h1>
                  <p className='text-[#B2AFAF] mt-5'>We specialize in creating captivating narratives that capture your
                    readers’ attention, keeping them hooked and driving deeper
                    engagement with your brand.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={strategyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className="Conversion flex space-x-4 mt-5">
                <img className='w-5 h-10' src={thunderlogo} alt="" />
                <div className="text flex flex-col">
                  <h1 className='text-white text-[22px]'>Conversion- Deriven Approch</h1>
                  <p className='text-[#B2AFAF] mt-5'>Our content strategies are meticulously crafted to drive conversions
                    and achieve measurable results. We focus on optimizing key messaging
                    and calls to action that guides your audience toward desired actions.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={strategyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
                className="Blocked_Decision flex space-x-4 mt-5">
                <img className='w-5 h-10' src={thunderlogo} alt="" />
                <div className="text flex flex-col">
                  <h1 className='text-white text-[22px]'>Data-Blocked Decisions</h1>
                  <p className='text-[#B2AFAF] mt-5'>By leveraging data insights and conducting comprehensive research,
                    we develop content strategies that are grounded in audience
                    preferences and behavior, ensuring maximum impact
                    and relevance.</p>
                </div>
              </motion.div>

            </div>

          </div>

          <div className="right_side">
            <div className="img01 and img02 flex justify-center space-x-10 lg:absolute right-10 mt-32">
              <img className='mt-10 h-[200px]' src={strategyimg01} alt="" />
              <img className='h-[300px]' src={strategyimg02} alt="" />
            </div>

            <div className="img03 lg:mt-[250px] sm:-mt-[190px] -mt-[170px]">
              <img className='absolute lg:right-[100px] sm:right-[280px] right-[180px] sm:w-[290px] w-[220px]' src={strategyimg03} alt="" />
            </div>

            <div className="img04">
              <img className='absolute  lg:right-[70px] sm:right-[230px] right-[150px]  lg:mt-[130px] mt-[100px]' src={strategyimg04} alt="" />
            </div>
          </div>
        </div>

        {/* --------------------BUILD AUTHENTIC---------------- */}
        <div ref={authenticRef} className="Build_Authentic lg:flex lg:mt-40 mt-[350px] xl:mx-[80px] mx-[30px] xl:mb-[200px] ">

          <div
            className="left_side hidden lg:block">
            <div className="img01 ">
              <img className='lg:absolute xl:left-[150px] lg:left-[100px] lg:w-[300px] xl:w-[400px]' src={BuildImg01} alt="" />
            </div>

            <div className="img02">
              <img className='sm:absolute lg:mt-28 xl:w-[350px] lg:w-[250px]' src={BuildImg02} alt="" />
            </div>

            <div className="img03">
              <img className='sm:absolute xl:left-[250px] left-[150px] xl:mt-[260px] lg:mt-[200px] xl:w-[300px] lg:w-[200px]' src={BuildImg03} alt="" />
            </div>

          </div>

          <div className="right_side 2xl:ml-[650px] xl:ml-[550px] lg:ml-[450px] mt-[40px] font-Outfit">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={authenticInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <h1 className='text-white 2xl:text-[50px] text-[40px] font-bold font-Outfit lg:text-left text-center'>Build Authentic</h1>
              <h1 className='text-white 2xl:text-[50px] text-[40px] font-bold font-Outfit -mt-5 lg:text-left text-center'>Audience Connections</h1>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={authenticInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className='text-[#B2AFAF] mt-5 lg:text-left text-center lg:ml-0 md:ml-[100px] sm:ml-[30px] lg:mr-0 md:mr-[100px] sm:mr-[30px]'>With a clear vision in mind, our expert team brings your content ideas to life. Our talented writers and creatives collaborate closely with you to understand your brand’s unique voice and transform it into compelling content.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={authenticInView ? { y: 0, opacity: 1.2 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className='text-[#B2AFAF] mt-5 lg:text-left text-center lg:ml-0 md:ml-[100px] sm:ml-[30px] lg:mr-0 md:mr-[100px] sm:mr-[30px] '>From ideation and creation to editing and publication, we work alongside you to develop engaging content experiences that resonate with your target audience. Through storytelling, personalization and targeted distribution, we ensure that
              your brand connects with your audience on a deeper level, driving
              loyalty and advocacy.</motion.p>
          </div>

          <div className="left_side lg:hidden mt-[80px] ">l
            <div className="img01 flex justify-center">
              <img className='lg:absolute md:w-[350px] sm:w-[300px] w-[200px]' src={BuildImg01} alt="" />
            </div>

            <div className="img02">
              <img className='sm:absolute sm:-mt-16 -mt-10 md:left-[180px] left-[100px] md:w-[300px] sm:w-[250px] w-[180px]' src={BuildImg02} alt="" />
            </div>

            <div className="img03">
              <img className='sm:absolute md:left-[340px] sm:left-[150px] ml-[100px] md:mt-16 sm:mt-[50px] -mt-10  md:w-[200px] sm:w-[150px] w-[150px]' src={BuildImg03} alt="" />
            </div>

          </div>
        </div>
        {/* ------------------USERPHOTO------------ */}
        <div ref={readyRef} className="user_info bg-white lg:pl-[140px] pr-[80px] md:px-[70px] px-[20px] pt-10 xl:mt-28 sm:mt-[300px] mt-[100px] pb-[100px]">

          <div className="about sm:flex justify-between">
            <div className=" hidden sm:block left_side  ">
              <img className='2xl:w-[528px] h-[791px] xl:w-[800px] lg:w-[1000px] w-[1500px]' src={serviceuserimg} alt="" />
            </div>

            <div className="right_side w-[643px] h-[357px] xl:pl-[50px] 2xl:pt-[250px] xl:pt-14 sm:pt-12  font-Outfit">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={readyInView ? { y: 0, opacity: 1.2 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                <h1 className='2xl:text-[52px] xl:text-[40px] lg:text-[36px] md:text-[30px] text-[25px]  font-bold sm:text-left text-center'>Ready to discuss your</h1>
                <h1 className='2xl:text-[52px] xl:text-[40px] lg:text-[36px] md:text-[30px] text-[25px]  font-bold 2xl:-mt-8 lg:-mt-5 -mt-3 sm:text-left text-center'>content marketing</h1>
                <h1 className='2xl:text-[52px] xl:text-[40px] lg:text-[36px] md:text-[30px] text-[25px]  font-bold 2xl:-mt-8 lg:-mt-5 -mt-3 sm:text-left text-center'>Strategy ?</h1>
              </motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={readyInView ? { y: 0, opacity: 1.2 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className='text-[#B2AFAF] sm:text-left text-center sm:pt-0 pt-3'>Meet with one of our content marketing strategists to take a deep dive into your brand’s goals and objectives. We’ll customize a strategy around your needs and outline our recommended services, budgets, and expectations together.
              </motion.p>

              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={readyInView ? { y: 0, opacity: 1.2 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className='hidden md:block bg-[#01000B] text-[#F0F0F0] mt-10 px-10 py-3  mb-10'>Schedule Your Content Strategy Call</motion.button>

            </div>
          </div>

          <div className="sm:hidden left_side 2xl:w-[80%] ">
            <img className='2xl:w-[400px] xl:w-[800px] lg:w-[1000px] w-[1500px]' src={serviceuserimg} alt="" />
          </div>
        </div>

        {/* ............CUSTOMER SUCCESS-------------- */}
        <div ref={successRef} className="sucess">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={successInView ? { y: 0, opacity: 1.2 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="heading">
            <h1 className='text-[#B2AFAF] font-Outfit text-center mt-10 xl:mt-[150px] '>/CUSTOMER SUCCESS</h1>
            <h1 className='text-white text-[54px] font-bold text-center font-Outfit'>Trusted By Industry Leaders</h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={successInView ? { y: 0, opacity: 1.2 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="copany_logo md:px-[100px] sm:px-[50px] px-[20px] grid md:grid-cols-6 grid-cols-3 gap-5 mt-10">

            <img className='bg-[#3B3765] px-6 2xl:py-3 xl:py-5 lg:py-4 py-6' src={canvalogo} alt="" />

            <img className='bg-[#3B3765] px-7 2xl:py-5 xl:py-6 lg:py-5 py-7' src={guccilogo} alt="" />

            <img className='hidden sm:block bg-[#3B3765] xl:px-14 md:px-9 px-12 
          2xl:py-2 xl:py-5 lg:py-1 md:py-5 sm:py-3 ' src={delllogo} alt="" />
            <div className="sm:hidden bg-[#3B3765] pl-4 pt-2">
              <img src={delllogo} alt="" />
            </div>

            <img className='bg-[#3B3765] px-7 2xl:py-4 xl:py-5 lg:py-4 py-6' src={harvardlogo} alt="" />

            <img className='bg-[#3B3765] px-5 2xl:py-6 xl:py-6 lg:py-5 md:py-6 sm:py-8 py-7 ' src={jagurlogo} alt="" />

            <img className='bg-[#3B3765] px-7 2xl:py-2 xl:py-4 lg:py-3 py-5' src={oktalogo} alt="" />

            <img className='bg-[#3B3765] px-5 py-6 md:col-start-2 xl:ml-[100px] md:ml-[50px]' src={zendesklogo} alt="" />
            <img className='bg-[#3B3765] px-7 py-6 xl:ml-[100px] md:ml-[50px]' src={Kraftlogo} alt="" />
            <img className='bg-[#3B3765] px-7 py-6 xl:ml-[100px] md:ml-[50px] ' src={deloittelogo} alt="" />
          </motion.div>
        </div>
        {/* ------SERVICE_CUSTOMER_IMAGES------------ */}

        <div className="service_images overflow-hidden   mt-20 ">

          <div className="sm:flex flex-1 md:space-x-12 md:space-y-0 space-y-5 mx-10">

            <img className='' src={serviceCustomer01} alt="" />
            <img className='' src={serviceCustomer02} alt="" />
            <img className='' src={serviceCustomer03} alt="" />
          </div>

          <div className=" hidden md:block">
            <div className=" flex flex-1 mt-10 md:space-x-10 mx-10">
              <img className='' src={serviceCustomer04} alt="" />
              <img className='' src={serviceCustomer05} alt="" />
              <img className='' src={serviceCustomer06} alt="" />
            </div>
          </div>
        </div>


        {/* .--------------------FORM----------- */}

        <div ref={contactRef} className="contact">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1.2 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className='text-white xl:text-[52px] lg:text-[42px] text-[32px] text-center mx-10 mt-20 xl:mt-[100px] font-Outfit font-bold'>Ready to discuss content marketing?</motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1.2 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="forms bg-[#1E1E1E] mx-auto shadow-xl rounded-[10px] mt-10 max-w-[1200px]">

            <form className="w-full sm:px-10 md:px-[64px] px-5 py-10 sm:space-y-8 space-y-5 font-Outfit mx-auto">
              <div className="sm:flex sm:space-x-5 space-y-5 sm:space-y-0">
                <div className="name w-full">
                  <label className="text-white block mb-2">Your Name*</label>
                  <input className="outline-none w-full rounded-[5px] pl-7 py-3" type="text" />
                </div>
                <div className="email w-full">
                  <label className="text-white block mb-2">Email Address*</label>
                  <input className="outline-none w-full rounded-[5px] pl-7 py-3" type="email" />
                </div>
              </div>
              <div className="sm:flex sm:space-x-5 space-y-5 sm:space-y-0">
                <div className="company w-full">
                  <label className="text-white block mb-2">Company Name</label>
                  <input className="outline-none w-full rounded-[5px] pl-7 py-3" type="text" />
                </div>
                <div className="website w-full">
                  <label className="text-white block mb-2">Website URL?*</label>
                  <input className="outline-none w-full rounded-[5px] pl-7 py-3" type="url" />
                </div>
              </div>
              <div className="textarea">
                <label className="text-white block mb-2">How can we help you grow your business?</label>
                <textarea className="w-full h-[200px] rounded-[7px] pl-5 py-3 outline-none"></textarea>
              </div>
              <div className="Strategy_btn flex justify-center">
                <button className="bg-white px-12 py-3 rounded-[2px]">Book a Strategy Call</button>
              </div>
            </form>
          </motion.div>

        </div>



      </div >
    </>
  )
}
export default Development