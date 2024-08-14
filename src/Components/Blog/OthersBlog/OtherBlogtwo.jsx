import React from 'react';
import buddhadai from "../../../assets/BlogImage/buddha-dai.jpg";
import blogimg1 from "../../../assets/BlogImage/digitalmarketingImg2.avif";
import blogimg2 from "../../../assets/BlogImage/digitalmarketing3.avif";


const OtherBlogtwo = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="max-w-[1536px] mx-auto mt-[70px] md:mt-[64px] lg:mt-[124px] px-4 md:px-8 lg:px-16">
          <div className="blog_section bg-white  py-[20px] md:py-[40px] px-4 md:px-8 lg:px-[40px] rounded-[8px]">
            <img className="rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto md:mx-0" src={buddhadai} alt="Avatar" />
            <div className="intro text-center md:text-left">
              <h1 className="text-black text-[18px] md:text-[22px] font-bold pt-4 md:pt-7">Buddha Thapa Magar</h1>
              <h2 className="text-[#8F8F8F] pt-2">Ditial Marketing at Rank One</h2>
              <h2 className="text-[#8F8F8F] pt-2">06 July 2024</h2>
            </div>
            <div className="about text-[#8F8F8F]">
              <h1 className="pt-[24px] md:pt-[48px] text-black text-[25px] md:text-[40px] font-Outfit">Strategies and tools for successful digital marketing in the modern age.</h1>

              <h2 className="pt-[24px] md:pt-[48px] text-[16px] md:text-[18px]">Digital marketing leverages online platforms to promote brands, products, and services. Effective strategies involve SEO, social media, and content marketing.</h2>

              <p className="pt-[10px] md:pt-[20px]">Digital marketing encompasses a wide range of online strategies aimed at promoting products, services, or brands. Key components include search engine optimization (SEO) to improve visibility, social media marketing to engage audiences, content marketing to provide value, and paid advertising for targeted reach. By leveraging data analytics, digital marketers can measure effectiveness and optimize campaigns, ensuring a strong online presence and driving business growth.</p>
              <p className="pt-[10px] md:pt-[20px]">Digital marketing is the practice of using online channels to reach and engage customers. It involves a mix of tactics, including SEO to boost search engine rankings, content marketing to attract and inform audiences, and social media to foster community engagement. Paid advertising and email marketing also play key roles. By analyzing data, marketers refine strategies to achieve optimal results and drive conversions.</p>
              <ul className="list-disc pt-[10px] md:pt-[20px] pl-[20px] md:pl-[30px]">
                <li>Search Engine Optimization (SEO): Enhances website visibility on search engines to attract organic traffic.</li>
                <li>Content Marketing: Creates valuable, relevant content to engage and inform target audiences.</li>
                <li>Social Media Marketing: Uses platforms like Facebook, Instagram, and LinkedIn to connect with audiences and build brand presence.</li>
                <li>Paid Advertising: Utilizes pay-per-click (PPC) and social media ads to reach specific target groups.</li>
                <li>Email Marketing: Sends targeted messages to nurture leads and maintain customer relationships.</li>
                <li>Analytics and Data Insights: Tracks and analyzes performance to refine strategies and optimize campaigns.</li>
                <li>Influencer Marketing: Collaborates with influencers to reach wider audiences and build credibility.</li>
                <li>Conversion Rate Optimization (CRO): Enhances website and landing page elements to increase conversion rates.</li>
              </ul>
              <p className="pt-[10px] md:pt-[20px]">Digital marketing is a comprehensive approach to promoting businesses and engaging with customers online. It involves a range of strategies, such as SEO for organic search visibility, content marketing to build brand authority, and social media marketing to connect with target audiences. Paid advertising, email campaigns, and influencer partnerships further enhance reach. The use of analytics and data-driven insights enables marketers to track performance, refine tactics, and ensure campaigns are aligned with business goals</p>
            </div>
            <img className="w-full pt-[24px] md:pt-[48px]" src={blogimg1} alt="Blog Image 1" />
            <h1 className="text-[#8F8F8F] pt-2 text-center md:text-left">Ethel Feest, abstract figures</h1>
            <h1 className="text-black text-[24px] md:text-[30px] pt-[24px] md:pt-[48px]">Lets Make Your Website at No.1 with best SEO.</h1>

            <div className="list text-[#8F8F8F] pt-[24px] md:pt-[48px] pl-[20px] md:pl-[30px]">
              <ul className="list-disc">
                <li>Affiliate Marketing: Partners with affiliates to promote products and earn commission-based sales.</li>
                <li>Mobile Marketing: Targets users on smartphones and tablets through apps, SMS, and responsive content.</li>
                <li>Video Marketing: Uses video content to engage audiences and promote products or services.</li>
                <li>Web Design and User Experience (UX): Focuses on creating a user-friendly website to enhance customer engagement.</li>
                <li>Customer Relationship Management (CRM): Utilizes tools to manage interactions and relationships with customers.</li>
              </ul>
              <h1 className="text-[16px] md:text-[18px] pt-[8px] md:pt-[16px]">Effective digital marketing combines strategy, creativity, and data-driven insights to connect with audiences, drive engagement, and achieve business goals.</h1>
            </div>
            <img className="pt-[24px] md:pt-[48px] w-full" src={blogimg2} alt="Blog Image 2" />
            <h1 className="pt-[8px] md:pt-[16px] w-full text-[#8F8F8F] text-center md:text-left">Ethel Feest, abstract figures</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherBlogtwo;
