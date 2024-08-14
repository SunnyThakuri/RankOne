import React from 'react';
import nischal from "../../../assets/BlogImage/Nischal.jpg";
import blogimg1 from "../../../assets/BlogImage/colortheoryimg1.jpg";
import blogimg2 from "../../../assets/BlogImage/colortheoryimg2.jpg";
import icon from "../../../assets/HomeImages/Icon.png";
import ayush from "../../../assets/BlogImage/Ayush.jpg";

const DesignBlogtwo = () => {
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
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Fundamentals of color theory and its application in design.</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Understanding color theory is crucial for effective design. Explore color harmonies, psychological impacts, and how color choices influence visual appeal and user experience.</h2>

              <p className="pt-[10px] md:pt-[20px]">Color theory is essential for creating visually appealing designs. It involves understanding color relationships, such as complementary, analogous, and triadic schemes. Knowledge of color psychology helps in evoking specific emotions and responses. Effective use of color enhances readability, user experience, and brand identity. Mastering color theory allows designers to make informed choices that align with project goals and audience expectations.</p>

              <p className="pt-[10px] md:pt-[20px]">Color theory is fundamental in design, involving the study of color relationships and their psychological effects. Key concepts include complementary, analogous, and triadic color schemes. Effective color use enhances visual appeal, readability, and user experience. Understanding color psychology helps evoke desired emotions and responses, making it essential for creating engaging and impactful designs that resonate with the audience</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Color Wheel: A visual tool that organizes colors based on their relationships, helping to identify complementary and harmonious color schemes.</li>
                <li>Primary Colors: Red, blue, and yellow; the foundation for creating all other colors by mixing.</li>
                <li>Complementary Colors: Colors located opposite each other on the color wheel, creating high contrast and visual interest.</li>
                <li>Analogous Colors: Colors located next to each other on the color wheel, offering a harmonious and cohesive look.</li>
                <li>Triadic Colors: Three colors evenly spaced on the color wheel, providing balanced and vibrant color schemes.</li>
                <li>Color Psychology: The study of how colors affect emotions and perceptions, influencing design choices and user responses.</li>
                <li>Warm and Cool Colors: Warm colors (reds, oranges, yellows) evoke energy and excitement, while cool colors (blues, greens, purples) promote calm and relaxation.</li>
                <li>Monochromatic Schemes: Variations of a single color, creating a cohesive and visually appealing design with different shades and tints.</li>

              </ul>
              <p className="pt-[10px] md:pt-[20px]">Color theory is a critical aspect of design that explores the relationships between colors and their psychological impacts. By understanding color harmonies, such as complementary, analogous, and triadic schemes, designers can create visually compelling compositions. Knowledge of color psychology allows for targeted emotional responses and effective communication of brand identity. Mastery of color theory enhances readability, user engagement, and overall aesthetic appeal, enabling designers to craft designs that are both attractive and functional.</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Color Theory Course</h1>
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
                <li>Hue: The base color itself, which can be modified by adjusting its lightness and saturation.</li>
                <li>Shade: A color created by adding black to a base color, resulting in a darker tone.</li>
                <li>Tint: A color created by adding white to a base color, resulting in a lighter tone.</li>
                <li>Saturation: The intensity or purity of a color, affecting its vibrancy and vividness.</li>
                <li>Contrast: The difference between colors or shades, enhancing readability and visual impact in design.</li>
              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Mastering color theory is essential for designers to create visually engaging and emotionally resonant experiences, enhancing the overall effectiveness of their work.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div >
    </>
  );
};

export default DesignBlogtwo;
