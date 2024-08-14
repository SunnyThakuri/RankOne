import React, { useEffect, useRef } from 'react'
import work1 from "../../assets/HomeImages/Rectangle1.jpg"
import work2 from "../../assets/HomeImages/Rectangle2.jpg"
import work3 from "../../assets/HomeImages/Rectangle3.png"
import work4 from "../../assets/HomeImages/Rectangle4.jpg"
import work5 from "../../assets/HomeImages/Rectangle5.png"
import work6 from "../../assets/HomeImages/workvideo.mp4"
import work7 from "../../assets/HomeImages/Rectangle7.png"
import work8 from "../../assets/HomeImages/Rectangle8.png"
import "../../style/OurWork.css"
import { motion, useInView } from 'framer-motion'


const OurWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const videoRef = useRef(null);

  useEffect(() => {
    const handlePlay = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlay, {
      threshold: 0.5, // Play when 50% of the video is in view
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="all_items md:mt-[164px] mt-[120px]">

        <div

          className="Headings  font-Outfit">
          <motion.h1
            ref={ref}
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='text-center text-[40px] text-white font-bold'>Our Works</motion.h1>

          <motion.p
            ref={ref}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className='text-center text-[#B2AFAF]'>Delivering innovative solutions through teamwork, dedication, and creativity.</motion.p>
        </div>


        <div className=" grid grid-cols-3 mx-[100px] gap-5 mt-[80px]">

          <div class="thumbnail row-span-2 hidden lg:block ">
            <div className="parent overflow-hidden h-full relative">
              {/* <div className="text">LOGO DESIGN</div> */}
              <div className='text work5text pt-[80px]'>Crafting unique, memorable logos that represent brands with impact.</div>
              <img className='w-[500px] h-full overflow-hidden ' src={work1} alt="" />
            </div>
          </div>

          <div class="thumbnail hidden lg:block h-[510px]  ">
            <div className="parent w-full h-full relative">
              {/* <div className="text work3text">POSTER DESIGN</div> */}
              <div className='text work3text pt-[50px]'>Creating visually striking posters that capture attention and convey messages</div>
              <img className='w-full h-full' src={work2} alt="" />
            </div>
          </div>

          {/* --------img03------------ */}
          <div class="thumbnail hidden lg:block  h-[510px] ">
            <div className="parent w-full relative">
              {/* <div className="text work3text">Animations</div> */}
              <div className='text work3tex pt-[50px]'>Bringing stories to life with dynamic and engaging animations.</div>
              <img className='h-[510px]' src={work3} alt="" />
            </div>
          </div>

          <div class="thumbnail hidden lg:block   col-span-2 w-full">
            <div className="parent   relative">
              {/* <div className="text work4text">NFT DEISGNS</div> */}
              <div className='text work4text pt-[50px] px-[100px]'>Designing unique digital assets for exclusive ownership and trade</div>
              <img className='w-full' src={work4} alt="" />
            </div>
          </div>

        </div>



        <div className="grid lg:grid-cols-2  pt-5  lg:mx-[100px] mx-5 gap-5 ">

          <div class="thumbnail   ">
            <div className="parent  relative">
              {/* <div className="text work5text ">Digital Marketing</div> */}
              <div className='text work5text pt-[80px]'>Strategizing online presence to drive engagement and boost growth</div>
              <img className='w-full' src={work5} alt="" />
            </div>
          </div>

          <div class="thumbnail   ">
            <video
              ref={videoRef}
              width="750"
              height="500"
              muted
              playsInline
              autoPlay
              loop
            >
              <source src={work6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>assets/hero.png"
          </div>



          <div class="thumbnail  ">
            <div className="parent relative">
              {/* <div className="text work7text">Development</div> */}
              <div className="text work7text pt-[100px]">"Building and improving software solutions to meet user needs."</div>
              <img className='w-full h-[300px]' src={work7} alt="" />
            </div>
          </div>


          <div class="thumbnail hidden lg:block h-full ">
            <div className="parent h-full   relative">
              {/* <div className="text work8text">Production</div> */}
              <div className='text work8text'>"Overseeing the creation process to ensure quality and efficiency."</div>
              <img className='h-full' src={work8} alt="" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
export default OurWork