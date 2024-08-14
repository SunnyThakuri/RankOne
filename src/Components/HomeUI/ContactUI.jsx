import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from "framer-motion"


const ContactUI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="items mt-[164px]">

        <div className="  md:flex justify-between xl:px-[100px] lg:px-[50px] md:px-[20px] px-10 pb-20 bg-[#212122] pt-[64px] font-Outfit">

          <div className="left_side text-white md:w-[50%] ">
            <motion.div
              ref={ref}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <h1 className="text-[#C4C4C4] md:text-left text-center">READY TO GROW?</h1>
              <h1 className="xl:text-[30px] text-[25px] font-bold   2xl:mr-[400px] xl:mr-[250px] lg:mr-[200px] md:mr-[100px] md:text-left text-center">Let’s discuss your next project.</h1>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="contact_details space-y-5 md:mt-0 mt-10 md:justify-start justify-center">
              <div className="call flex md:space-x-4 space-x-2 2xl md:mt-12">
                <p className="bg-[#4E4E4E] rounded-full px-2 py-1"><i class="fa-solid fa-phone"></i></p>
                <p className="md:text-[20px] text-[18px]">(408) 833-8373</p>
              </div>

              <div className="email flex md:space-x-4 space-x-2 md:mt-5">
                <p className="bg-[#4E4E4E] rounded-full px-2 py-1"><i class="fa-solid fa-envelope"></i></p>
                <p className="md:text-[20px] text-[18px]">hello@rankone.com</p>
              </div>
            </motion.div>
          </div>


          <motion.div
            ref={ref}
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="form md:w-[50%] md:mt-0 mt-10">
            <form className='space-y-10'>
              <div className="firstname-and-lastname flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='First Name*'
                />
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='Last Name*'
                />
              </div>

              <div className="companyname-and-weburl flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='Company Name'
                />
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='Website URL'
                />
              </div>

              <div className="email-and-phone flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="email"
                  placeholder='Email*'
                />
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='Phone'
                />
              </div>

              <div className="project-details">
                <input
                  className='outline-none pb-5 text-white bg-transparent border-b-2 border-[#C4C4C4] w-full'
                  type="text"
                  placeholder='Project Details*'
                />
              </div>

              <button className='px-20 py-3 bg-white rounded-md'>
                Submit
              </button>
            </form>


          </motion.div>
        </div>
      </div >
    </>
  )
}
export default ContactUI