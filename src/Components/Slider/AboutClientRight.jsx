import React from 'react';
import { motion } from 'framer-motion';
import client1 from "../../assets/AboutImages/client11.png";
import client2 from "../../assets/AboutImages/client9.png";
import client6 from "../../assets/AboutImages/client6.png";
import client3 from "../../assets/AboutImages/client12.png";
import client4 from "../../assets/AboutImages/client4.png";
import client5 from "../../assets/AboutImages/client5.png";



const AboutClientRight = () => {
  const images = [client1, client2, client3, client4, client5, client6];

  return (
    <div className="overflow-hidden relative mt-5">
      <motion.div
        className="flex"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ display: 'flex', width: '200%' }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0  border-[2px] border-[#47474747] hover:border-white rounded-[20px] h-[200px] w-[200px] mt-5 mx-[10px]"
            style={{ width: `${100 / images.length}%` }}
          >
            <div className="flex justify-center py-10">
              <img className='w-[150px] h-[100px]' src={image} alt={`Client ${index + 1}`} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutClientRight;
