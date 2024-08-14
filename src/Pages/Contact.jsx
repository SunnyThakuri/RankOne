import phoneicon from "../assets/ContactImages/uil_phone.png";
import mailicon from "../assets/ContactImages/ci_mail.png";
import locationicon from "../assets/ContactImages/humbleicons_location.png";
import facebookicon from "../assets/ContactImages/Social button.png";
import linkedinicon from "../assets/ContactImages/Social button(2).png";
import twittericon from "../assets/ContactImages/Social button(1).png";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

const Contact = () => {

  const mapRef = useRef(null);

  const mapInView = useInView(mapRef, { once: true });

  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="flex flex-col items-center sm:mt-[130px] xl:mx-[100px] md:mx-[50px] mx-10 space-y-10">

          <div className="w-full md:flex justify-between space-y-10 md:space-y-0">

            <div className="md:w-1/2 space-y-3 mt-[100px]">

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-white text-[22px] text-center md:text-left font-bold">Get in touch</motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[#B2AFAF] text-center md:text-left w-[328px]">
                We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[#568DFF] flex justify-center md:justify-start space-x-3 ">
                <h1 className="text-[15px]">Read More</h1>
                <i className="fa-solid fa-arrow-right text-[15px] mt-1"></i>
              </motion.div>

              <div className="space-y-4 pt-5">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-white text-[22px] font-bold">Address</motion.h1>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }}
                  className="phone flex space-x-5">
                  <img src={phoneicon} alt="phone" />
                  <h2 className="text-[#C4C4C4]">(408) 833-8373</h2>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mail flex space-x-5">
                  <img src={mailicon} alt="email" />
                  <h2 className="text-[#C4C4C4]">hello@rankone.com</h2>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }}
                  className="location flex space-x-5">
                  <img src={locationicon} alt="location" />
                  <h2 className="text-[#C4C4C4]">Old Baneshwor, Kathmandu</h2>
                </motion.div>

              </div>
              <div className="space-y-4">
                <motion.h1 initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }} className="text-[22px] text-white font-bold">Social media</motion.h1>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 1.1, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex space-x-5">
                  <img src={facebookicon} alt="Facebook" />
                  <img src={twittericon} alt="Twitter" />
                  <img src={linkedinicon} alt="LinkedIn" />
                </motion.div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="md:w-[80%]">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-white text-[42px] text-center font-bold">Contact Us</motion.h1>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
                className="bg-[#1E1E1E] shadow-xl rounded-[10px] mt-10 p-5 sm:p-7">
                <form className="space-y-5">
                  <div className="sm:flex sm:space-x-10 space-y-8 sm:space-y-0">
                    <div className="w-full">
                      <p className="text-white mb-3">Your Name*</p>
                      <input
                        className="outline-none w-full rounded-[5px] pl-7 py-3 h-[46px]"
                        type="text"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-white mb-3">Email Address*</p>
                      <input
                        className="outline-none w-full rounded-[5px] pl-7 py-3 h-[46px]"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:space-x-10 space-y-8 sm:space-y-0">
                    <div className="w-full">
                      <p className="text-white mb-3 ">Phone Number</p>
                      <input
                        className="outline-none w-full rounded-[5px] pl-7 py-3 h-[46px]"
                        type="text"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-white mb-3">Company Name</p>
                      <input
                        className="outline-none w-full rounded-[5px] pl-7 py-3 h-[46px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-3">How can we help you grow your business?</p>
                    <textarea
                      className="w-full outline-none rounded-[7px] pl-7 py-3 h-[193px]"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-white px-12 py-3 rounded-[5px]">Submit</button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>

          <motion.div
            ref={mapRef}
            initial={{ y: 60, opacity: 0 }}
            animate={mapInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="w-full px-[183.5px] pt-[100px]">
            <iframe
              title="OFFICE FRAME"
              className="w-full h-[500px] rounded-[8px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.0127263877675!2d85.33554376550708!3d27.701647974393772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199ea3ab2017%3A0xfbcc07a60035b727!2sKumari%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1716105647914!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div >
      </div>
    </>
  );
};

export default Contact;
