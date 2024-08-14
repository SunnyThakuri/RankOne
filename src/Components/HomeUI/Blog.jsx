import React, { useRef } from 'react'
import blog1 from "../../assets/HomeImages/blog1.png"
import blog2 from "../../assets/HomeImages/blog2.jpg"
import blog3 from "../../assets/HomeImages/blog3.jpg"
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="blog_items bg-white md:mt-[164px] mt-[120px] py-[80px] xl:px-[80px] lg:px-[50px]">

        <div className="heading_section md:flex md:justify-between justify-normal ">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="left_side">
            <h1 className="text-[32px] font-semibold md:text-left text-center sm:pl-10">Latest</h1>
            <h1 className="pt-3 text-[32px] font-semibold text-[#828282] md:w-[300px] md:text-left text-center px-10 -mt-5">Blog Post</h1>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="right_side lg:ml-[350px] xl:mr-[100px]md:text-left text-center px-10 sm:px-[50px] md:mt-auto mt-5">
            <p className="text-[#828282] text-justify">
              Fresh Insights, Dive into Our Latest  Blog Post for Innovative Ideas and Inspirations. Unlock your creativity with our blog post and discover fresh perspectives! Get ready to be inspired and
              ignite your imagination today!
            </p>
          </motion.div>
        </div>

        <div className="Blog_img grid sm:grid-cols-2 lg:grid-cols-3">
          <NavLink to='/blog'>
            <motion.div
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="img1 px-10 mt-10 cursor-pointer">
              <img src={blog1} alt="" />
              <h1 className='font-semibold text-[18px] mt-5'>Best Website Developer: Creating exceptional websites with innovative design and functionality</h1>
              <h2 className='text-[#828282] mt-3 font-semibold'>Transform Your Website and Experience the Joy of Seamless Functionality</h2>
            </motion.div>
          </NavLink>

          <NavLink to='/blog'>
            <motion.div
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
              className="img2 px-10 mt-10 cursor-pointer">
              <img src={blog2} alt="" />
              <h1 className='font-semibold text-[18px] mt-5'>Best Digital Marketing: Maximizing online reach with strategic and creative solutions.</h1>
              <h2 className='text-[#828282] mt-3 font-semibold'>Transform Your Space and Experience the Joy of Immaculate Living</h2>
            </motion.div>
          </NavLink>

          <NavLink to='/blog'>
            <motion.div
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              className="img3 px-10 mt-10 cursor-pointer">
              <img src={blog3} alt="" />
              <h1 className='font-semibold text-[18px] mt-5'>Spotless Solutions: Mastering the Art of Clean - Your Ultimate Cleaning Guide</h1>
              <h2 className='text-[#828282] mt-3 font-semibold'>Transform Your Space and Experience the Joy of Immaculate Living</h2>
            </motion.div>
          </NavLink>
        </div>


      </div >
    </>
  )
}
export default Blog