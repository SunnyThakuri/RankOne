import React from 'react';
import blogimg1 from "../../../assets/BlogImage/animationImg2.avif";
import blogimg2 from "../../../assets/BlogImage/animationImg3.avif";

import aayush from "../../../assets/BlogImage/Ayush.jpg";

const OtherBlogone = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="max-w-[1536px] mx-auto mt-[70px] md:mt-[64px] lg:mt-[124px] px-4 md:px-8 lg:px-16">
          <div className="blog_section bg-white  py-[20px] md:py-[40px] px-4 md:px-8 lg:px-[40px] rounded-[8px]">
            <img className="rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto md:mx-0" src={aayush} alt="Avatar" />
            <div className="intro text-center md:text-left">
              <h1 className="text-black text-[18px] md:text-[22px] font-bold pt-4 md:pt-7">Aayush Gyawali</h1>
              <h2 className="text-[#8F8F8F] pt-2"> Junior Graphic Designer, CEO at Rank One</h2>
              <h2 className="text-[#8F8F8F] pt-2">06 December 2024</h2>
            </div>
            <div className="about text-[#8F8F8F]">
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Key techniques and trends shaping the future of animation.</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Animation combines art and technology to create dynamic visuals. It involves techniques like frame-by-frame and motion graphics, driving storytelling and enhancing user engagement.</h2>

              <p className="pt-[10px] md:pt-[20px]">Animation is a powerful tool in visual storytelling, blending art and technology to bring characters and scenes to life. Techniques such as frame-by-frame animation, 3D modeling, and motion graphics enable creators to convey ideas and emotions effectively. Advances in technology, like real-time rendering and AI, are transforming the field, making animations more realistic and interactive, and driving new trends in entertainment and digital media.</p>

              <p className="pt-[10px] md:pt-[20px]">Animation merges creativity with technology to produce dynamic visuals that capture audiences’ attention. It includes various techniques such as traditional frame-by-frame, computer-generated imagery (CGI), and motion graphics. With technological advancements like virtual reality and artificial intelligence, animation is becoming increasingly immersive and interactive. These developments are reshaping the industry, pushing boundaries, and enhancing storytelling across entertainment, advertising, and digital experiences.</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Traditional Animation: Frame-by-frame technique where each frame is drawn by hand.</li>
                <li>2D Animation: Creating movement in a two-dimensional space using software tools.</li>
                <li>3D Animation: Using computer-generated imagery (CGI) to create three-dimensional models and scenes.</li>
                <li>Motion Graphics: Incorporating graphic design elements with animation for engaging visuals.</li>
                <li>Stop-Motion: Capturing individual frames of physical objects or puppets to create movement.</li>
                <li>Real-Time Animation: Techniques used in gaming and VR to render animations on-the-fly.</li>
                <li>Character Animation: Focusing on bringing characters to life with movement and expression.</li>
                <li>Visual Effects (VFX): Enhancing live-action footage with animated elements and effects.</li>
              </ul>
              <p className="pt-[10px] md:pt-[20px]">Animation is a dynamic field that combines artistic creativity with technological innovation to create compelling visuals and stories. It encompasses techniques such as 2D and 3D animation, motion graphics, and stop-motion. The industry is continually evolving with advancements in technology, including real-time rendering, virtual reality, and AI-driven animation tools. These innovations are enhancing the realism, interactivity, and engagement of animated content, driving new trends and opportunities in entertainment, advertising, and digital media.</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Lookscout</h1>

            <div className="list text-[#8F8F8F] pt-[24px] md:pt-[48px] pl-[20px] md:pl-[30px]">
              <ul className="list-disc">
                <li>Storyboarding: Planning and sketching out scenes to visualize the animation sequence.</li>
                <li>Rigging: Creating digital skeletons for 3D models to enable movement.</li>
                <li>Texturing: Applying surface details to 3D models to enhance realism.</li>
                <li>Rendering: Converting 3D models and scenes into final images or sequences.</li>
                <li>Motion Capture: Using sensors to record real-life movements for realistic animation.</li>
              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Animation blends art and technology to create engaging visuals and stories, with evolving techniques driving innovation and enhancing digital experiences.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherBlogone;
