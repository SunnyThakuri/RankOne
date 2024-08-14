import React from 'react';
import sunnydai from "../assets/BlogImage/sunny_dai.jpg";
import blogimg1 from "../assets/HomeImages/blogImg1.png";
import blogimg2 from "../assets/HomeImages/blogImg2.png";
import icon from "../assets/HomeImages/Icon.png";
import buddhadai from "../assets/BlogImage/buddha-dai.jpg";

const Blog = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="max-w-[1536px] mx-auto mt-[70px] md:mt-[64px] lg:mt-[124px] px-4 md:px-8 lg:px-16">
          <div className="blog_section bg-white  py-[20px] md:py-[40px] px-4 md:px-8 lg:px-[40px] rounded-[8px]">
            <img className="rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto md:mx-0" src={sunnydai} alt="Avatar" />
            <div className="intro text-center md:text-left">
              <h1 className="text-black text-[18px] md:text-[22px] font-bold pt-4 md:pt-7">Sunny Thakuri</h1>
              <h2 className="text-[#8F8F8F] pt-2">Graphic Designer, CEO of Rank One</h2>
              <h2 className="text-[#8F8F8F] pt-2">06 December 2022</h2>
            </div>
            <div className="about text-[#8F8F8F]">
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Where to start your e-commerce website redesign to increase revenue</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Social tent whatever put needle you. Canatics invite any algorithm run marketing right growth uat community. You indicators get pin wiggle game finish.</h2>

              <p className="pt-[10px] md:pt-[20px]">Wider best kpis now we've digital existing hit drawing-board shark. Make please it dear resources. Window door open let's activities goalposts my also. Panel club criticality want we donuts. Scope want circle to both is exploratory down. Savvy room usabiltiy tentative door giant monday. Talk value-added kimono power recap eye comms need close value-added. Helicopter best nail optimize effects. Own optimize look open scope closing hop great of. Dive this engagement about and first. Staircase social like weeks managing revision quarter underlying invite break. Seems panel yet production encourage model marginalised can.</p>
              <p className="pt-[10px] md:pt-[20px]">Technologically bake helicopter feed an downloaded diligence sandwich crystallize. See feed no right alpha for space back. Would contribution dunder agile hard. Cc journey identify want deploy. Win customer beforehand sandwich to hit stakeholder. Tiger fit ask procrastinating ipsum they. Right pivot product take better options while replied uat. No most we've due masking algorithm 30,000ft one whistles. No-brainer as own low closer savvy land staircase. We playing culture it's pole. Pole feelers able make pivot whistles like. Zoom needle helicopter status invite start so issues hands.</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Adoption waste so policy blue regroup. Recap base ballpark optimal opportunity bandwagon floor.</li>
                <li>Optimize submit replied sexy loss roll ideal didn't is. Elephant without stop talk diligence welcome lean level.</li>
                <li>Involved including without client going manager standup individual you. Work strategy zoom contribution join feed previous boardroom language wider. Flesh idea without just dunder run squad view.</li>
                <li>Proceduralize pin savvy speed loss future-proof these. Hammer be native for including could left.</li>
                <li>Reach happenings growth driver's tomorrow circle low.</li>
                <li>Adoption points people baked data practices teams is focus.</li>
                <li>Get club ipsum were weaponize stakeholder crack base.</li>
                <li>Roll customer centric dear exploratory well. Assassin talk savvy initiative kimono box don't.</li>
              </ul>
              <p className="pt-[10px] md:pt-[20px]">4-blocker working floor ping then. Box your seat me issues post closest. Launch fit community when bake customer who's. Go pivot jumping note centric air tomorrow. Nobody illustration pain welcome ditching quick-win half first company territories. Happenings supervisor seat welcome engagement dunder. Needle unit contribution let's baseline club ping customer solutions long. Blue would moments guys sexy first-order third underlying interim baked. Journey client deliverables existing dive lot with create marketing. Gmail down able developing dear meat line. Accountable slipstream ladder running re-inventing sky eco-system land indicators previous. Sorry we hill place ourselves revision socialize knowledge on barn.</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Get Started With Lookscout</h1>
            <div className="border-l-4 border-l-[#437EF7] pl-5 mt-[24px] md:mt-[48px]">
              <img src={icon} alt="Icon" />
              <h1 className="text-black font-Outfit pt-[8px] md:pt-[16px]">“Leading a holistic approach while low remembering to create a better customer experience. Generating empathy maps yet target the low hanging fruit.</h1>
              <div className="user flex space-x-3 pt-[8px] md:pt-[16px]">
                <img className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full" src={buddhadai} alt="Avatar 2" />
                <div className="">
                  <h1 className="text-black">Buddha Thapa Magar</h1>
                  <h2 className="text-[#8F8F8F]">CEO</h2>
                </div>
              </div>
            </div>
            <div className="list text-[#8F8F8F] pt-[24px] md:pt-[48px] pl-[20px] md:pl-[30px]">
              <ul className="list-disc">
                <li>Organic rehydrate proceduralize decisions all into.</li>
                <li>Create keep uat net whatever. Banner downloaded items weaponize after if.</li>
                <li>Done say savvy who's deploy an diarize.</li>
                <li>Create eod our boy third teams. Resources group red-flag journey revision company both.</li>
                <li>Tiger synergize happenings slipstream looking pulling fastworks but paradigm.</li>
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

export default Blog;
