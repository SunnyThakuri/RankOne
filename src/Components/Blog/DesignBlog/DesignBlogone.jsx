import React from 'react';
import nischal from "../../../assets/BlogImage/Nischal.jpg";
import blogimg1 from "../../../assets/BlogImage/graphicdesign2.webp";
import blogimg2 from "../../../assets/BlogImage/graphicdesignimg1.webp";
import icon from "../../../assets/HomeImages/Icon.png";
import ayush from "../../../assets/BlogImage/Ayush.jpg";

const DesignBlogone = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="max-w-[1536px] mx-auto mt-[70px] md:mt-[64px] lg:mt-[124px] px-4 md:px-8 lg:px-16">
          <div className="blog_section bg-white  py-[20px] md:py-[40px] px-4 md:px-8 lg:px-[40px] rounded-[8px]">
            <img className="rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto md:mx-0" src={nischal} alt="Avatar" />
            <div className="intro text-center md:text-left">
              <h1 className="text-black text-[18px] md:text-[22px] font-bold pt-4 md:pt-7">Nischal Rai</h1>
              <h2 className="text-[#8F8F8F] pt-2">Senior Graphic Designer @ Rank One</h2>
              <h2 className="text-[#8F8F8F] pt-2">10 August 2024</h2>
            </div>
            <div className="about text-[#8F8F8F]">
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Key principles and trends shaping modern web and graphic design</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Explore the essential principles and current trends in design, from user-centered approaches to the latest visual styles, and how they impact effective design solutions.</h2>

              <p className="pt-[10px] md:pt-[20px]">Design is a dynamic field that evolves with technology and user needs. Key principles include user-centered design, visual hierarchy, and accessibility. Current trends focus on minimalist aesthetics, vibrant color schemes, and responsive layouts. Emphasizing intuitive interfaces and seamless experiences is crucial for effective design. Understanding these principles and trends helps create compelling, functional designs that resonate with users and meet modern expectations.</p>

              <p className="pt-[10px] md:pt-[20px]">Design is constantly evolving, driven by technological advancements and changing user preferences. Core principles include user-centered design, visual hierarchy, and accessibility. Current trends emphasize minimalism, bold colors, and responsive layouts. Effective design prioritizes intuitive interfaces and seamless user experiences. By mastering these principles and staying updated with trends, designers can create engaging, functional solutions that meet modern needs and enhance user satisfaction.</p>

              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>User-Centered Design: Focus on creating designs that prioritize the needs and preferences of the end user.</li>
                <li>Visual Hierarchy: Use size, color, and layout to guide users' attention to the most important elements.</li>
                <li>Accessibility: Ensure designs are usable by people with various disabilities, following best practices for inclusivity.</li>
                <li>Minimalism: Embrace simple, clean designs that reduce clutter and emphasize essential elements.</li>
                <li>Bold Colors: Utilize vibrant color schemes to create visual interest and attract user attention.</li>
                <li>Responsive Layouts: Design for various screen sizes and devices to ensure a consistent user experience.</li>
                <li>Intuitive Navigation: Create clear, easy-to-use navigation systems that enhance usability and accessibility.</li>
                <li>Seamless User Experience: Focus on smooth interactions and transitions to improve overall user satisfaction and engagement.</li>
              </ul>
              <p className="pt-[10px] md:pt-[20px]">Design continues to evolve with technological advancements and shifting user needs. Essential principles include user-centered design, effective visual hierarchy, and strong accessibility considerations. Modern trends highlight minimalistic aesthetics, vibrant color schemes, and responsive design to ensure compatibility across devices. Emphasizing intuitive navigation and seamless user experiences is crucial. By understanding and applying these principles and trends, designers can craft compelling, functional solutions that meet contemporary expectations and enhance overall user satisfaction."</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Lookscout</h1>
            <div className="border-l-4 border-l-[#437EF7] pl-5 mt-[24px] md:mt-[48px]">
              <img src={icon} alt="Icon" />
              <h1 className="text-black font-Outfit pt-[8px] md:pt-[16px]">“Leading a holistic approach while low remembering to create a better customer experience. Generating empathy maps yet target the low hanging fruit.</h1>
              <div className="user flex space-x-3 pt-[8px] md:pt-[16px]">
                <img className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full" src={ayush} alt="Avatar 2" />
                <div className="">
                  <h1 className="text-black">Aayush Gyawali</h1>
                  <h2 className="text-[#8F8F8F]">Junior Graphic Designer</h2>
                </div>
              </div>
            </div>
            <div className="list text-[#8F8F8F] pt-[24px] md:pt-[48px] pl-[20px] md:pl-[30px]">
              <ul className="list-disc">
                <ul>
                  <li>Typography: Choose fonts and text styles that enhance readability and align with the design's tone and purpose.</li>
                  <li>Microinteractions: Incorporate small, subtle animations that provide feedback and enhance user interactions.</li>
                  <li>Visual Consistency: Maintain uniform design elements across all platforms to reinforce brand identity and improve usability.</li>
                  <li>Data-Driven Design: Use analytics and user feedback to inform design decisions and optimize functionality.</li>
                  <li>Sustainability: Consider eco-friendly design practices and materials to promote environmental responsibility.</li>
                </ul>

              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Attached stronger playing backwards pain client. Deploy due playing value-added centric obviously. Team productive let's but engagement could eco-system.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignBlogone;
