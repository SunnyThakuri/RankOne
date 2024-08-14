import React from 'react';
import nischal from "../../../assets/BlogImage/Nischal.jpg";
import blogimg1 from "../../../assets/BlogImage/typographyimg2.jpg";
import blogimg2 from "../../../assets/BlogImage/typographyimg1.jpg";
import icon from "../../../assets/HomeImages/Icon.png";
import ayush from "../../../assets/BlogImage/Ayush.jpg";

const DesignBlogthree = () => {
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
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Exploring the principles of typography and its impact on design</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Typography is a critical aspect of design, influencing readability, visual hierarchy, and overall user experience through the choice and arrangement of type.</h2>

              <p className="pt-[10px] md:pt-[20px]">Typography plays a vital role in design by shaping how content is perceived and understood. It involves the strategic selection of fonts, sizes, spacing, and alignment to create visual hierarchy and guide the reader's eye. Good typography enhances readability, conveys tone, and strengthens brand identity. Understanding the principles of typography allows designers to create visually appealing and effective communication across various media.</p>

              <p className="pt-[10px] md:pt-[20px]">Effective typography is about more than just choosing a font. It encompasses the arrangement and styling of type to ensure clarity and engagement. By controlling factors like line spacing, kerning, and type size, designers can create a harmonious and readable layout. Typography not only enhances visual appeal but also conveys emotion and meaning, making it an essential tool in any design project.</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Font Selection: Choosing the right typeface to align with the design's tone and purpose.</li>
                <li>Hierarchy: Using different font sizes, weights, and styles to guide the reader’s attention.</li>
                <li>Kerning: Adjusting the space between individual characters for better visual balance.</li>
                <li>Line Spacing: Managing the space between lines of text to enhance readability and flow.</li>
                <li>Alignment: Ensuring text is aligned properly (left, right, center, justified) for a clean layout.</li>
                <li>Contrast: Using varying type styles and sizes to create contrast and distinguish different text elements.</li>
                <li>Consistency: Maintaining uniformity in typography choices across a design to strengthen the overall look.</li>
                <li>Readability: Ensuring text is easy to read by selecting appropriate fonts, sizes, and spacing.</li>
                <li>Whitespace: Using space around text elements to create a balanced and uncluttered design.</li>
                <li>Font Pairing: Combining different fonts that complement each other to add visual interest.</li>


              </ul>
              <p className="pt-[10px] md:pt-[20px]">Typography is an integral component of design, deeply influencing the way information is communicated and perceived. It involves the careful selection of typefaces, sizes, spacing, and alignment to create a cohesive visual structure. Typography guides the reader's eye, establishes mood, and reinforces the message of the content. By mastering typography, designers can create layouts that are not only aesthetically pleasing but also functional, ensuring that the text is both engaging and easily understood</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Design Typography</h1>
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
                <li>Whitespace: Using space around text elements to create a balanced and uncluttered design.</li>
                <li>Font Pairing: Combining different fonts that complement each other to add visual interest.</li>
                <li>Legibility: Ensuring that text is clear and easy to read at various sizes and on different screens.</li>
                <li>Color and Contrast: Choosing text colors that contrast well with the background for better visibility.</li>
                <li>Responsive Typography: Adjusting font sizes and spacing to ensure readability on different devices and screen sizes.</li>
              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Mastering typography enhances design clarity, effectiveness, and emotional impact, creating a lasting impression.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div >
    </>
  );
};

export default DesignBlogthree;
