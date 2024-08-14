import React from 'react';
import ashis from "../../../assets/BlogImage/Ashish.jpeg";
import blogimg1 from "../../../assets/BlogImage/developmentblog1.webp";
import blogimg2 from "../../../assets/BlogImage/develomentimg2.jpg";
import icon from "../../../assets/HomeImages/Icon.png";


const DevelopmentBlogone = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="max-w-[1536px] mx-auto mt-[70px] md:mt-[64px] lg:mt-[124px] px-4 md:px-8 lg:px-16">
          <div className="blog_section bg-white  py-[20px] md:py-[40px] px-4 md:px-8 lg:px-[40px] rounded-[8px]">
            <img className="rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto md:mx-0" src={ashis} alt="Avatar" />
            <div className="intro text-center md:text-left">
              <h1 className="text-black text-[18px] md:text-[22px] font-bold pt-4 md:pt-7">Ashis Lwaju</h1>
              <h2 className="text-[#8F8F8F] pt-2">Fullstack Web Developer @ Rank One</h2>
              <h2 className="text-[#8F8F8F] pt-2">08 August 2024</h2>
            </div>
            <div className="about text-[#8F8F8F]">
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Overview of current web development trends</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Exploring the latest advancements in web development: from AI integration and enhanced user experiences to cutting-edge technologies and evolving best practices.</h2>

              <p className="pt-[10px] md:pt-[20px]">Current web development trends emphasize the use of JavaScript frameworks like React, Vue.js, and Angular for dynamic, responsive UIs. The rise of Jamstack architecture, combining static site generators with serverless functions, is also notable. Additionally, web performance optimization, progressive web apps (PWAs), and AI-driven features like chatbots, recommendation engines, and personalization are gaining traction, enhancing user experience and engagement across platforms.</p>
              <p className="pt-[10px] md:pt-[20px]">The shift towards headless CMS and microservices architecture is reshaping how web applications are built, offering flexibility and scalability. Developers are also embracing static site generators like Next.js and Gatsby for faster load times and better SEO. Moreover, the increasing importance of accessibility and inclusive design ensures that websites are usable by all, while the adoption of dark mode and minimalist design reflects current aesthetic trends..</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Adoption waste so policy blue regroup. Recap base ballpark optimal opportunity bandwagon floor.</li>
                <li> Leveraging AI for personalized user experiences, chatbots, and predictive analytics.</li>
                <li>Enhancing user engagement with fast, reliable, and app-like experiences on the web.</li>
                <li>mproving performance and SEO with SSR frameworks like Next.js and static site generators.</li>
                <li> Building faster and more secure websites with a decoupled front-end and back-end.</li>
                <li>Creating dynamic and responsive web applications with frameworks like React, Angular, and Vue.js.</li>
                <li>Enhancing web performance by running high-performance code directly in the browser.</li>
                <li>Increasing user engagement and visual appeal with sophisticated animations and transitions.</li>
                <li>Implementing advanced security practices to protect against emerging threats and vulnerabilities.</li>
              </ul>
              <p className="pt-[10px] md:pt-[20px]">4-blocker working floor ping then. Box your seat me issues post closest. Launch fit community when bake customer who's. Go pivot jumping note centric air tomorrow. Nobody illustration pain welcome ditching quick-win half first company territories. Happenings supervisor seat welcome engagement dunder. Needle unit contribution let's baseline club ping customer solutions long. Blue would moments guys sexy first-order third underlying interim baked. Journey client deliverables existing dive lot with create marketing. Gmail down able developing dear meat line. Accountable slipstream ladder running re-inventing sky eco-system land indicators previous. Sorry we hill place ourselves revision socialize knowledge on barn.</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Lookscout</h1>
            <div className="border-l-4 border-l-[#437EF7] pl-5 mt-[24px] md:mt-[48px]">
              <img src={icon} alt="Icon" />
              <h1 className="text-black font-Outfit pt-[8px] md:pt-[16px]">“Leading a holistic approach while low remembering to create a better customer experience. Generating empathy maps yet target the low hanging fruit.</h1>
            </div>
            <div className="list text-[#8F8F8F] pt-[24px] md:pt-[48px] pl-[20px] md:pl-[30px]">
              <ul className="list-disc">
                <li> Leveraging AI for personalized user experiences, chatbots, and predictive analytics.</li>
                <li>Enhancing user engagement with fast, reliable, and app-like experiences on the web.</li>
                <li>mproving performance and SEO with SSR frameworks like Next.js and static site generators.</li>
                <li> Building faster and more secure websites with a decoupled front-end and back-end.</li>
                <li>Creating dynamic and responsive web applications with frameworks like React, Angular, and Vue.js.</li>
              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Embracing these trends ensures developers create faster, engaging, and secure web experiences for users.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentBlogone;
