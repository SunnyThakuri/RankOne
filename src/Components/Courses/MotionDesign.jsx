import React from 'react'
import subheadingImg from "../../assets/Graphic Design/subheadingImg.png"
import futureImg from "../../assets/Graphic Design/future.png"
import portfolioimg1 from "../../assets/Graphic Design/portoflioimg01.png"
import portfolioimg2 from "../../assets/Graphic Design/portoflioimg02.png"
import portfolioimg3 from "../../assets/Graphic Design/portoflioimg03.png"
import portfolioimg4 from "../../assets/Graphic Design/portoflioimg04.png"
import portfolioimg5 from "../../assets/Graphic Design/portoflioimg05.png"
import portfolioimg6 from "../../assets/Graphic Design/portoflioimg06.png"
import portfolioimg7 from "../../assets/Graphic Design/portoflioimg07.png"
import portfolioimg8 from "../../assets/Graphic Design/portoflioimg08.png"
import portfolioimg9 from "../../assets/Graphic Design/portoflioimg9.png"
import portfolioimg10 from "../../assets/Graphic Design/portoflioimg10.png"
import portfolioimg11 from "../../assets/Graphic Design/portfolioImg11.png"
import portfolioimg12 from "../../assets/Graphic Design/portfolioImg12.png"
import portfolioimg13 from "../../assets/Graphic Design/portfolioImg13.png"
import portfolioimg14 from "../../assets/Graphic Design/portfolioImg14.png"
import portfolioimg15 from "../../assets/Graphic Design/portfolioImg15.png"
import portfolioimg16 from "../../assets/Graphic Design/portfolioImg16.png"
import portfolioimg17 from "../../assets/Graphic Design/portfolioImg17.png"
import portfolioimg18 from "../../assets/Graphic Design/portfolioImg18.png"
import portfolioimg19 from "../../assets/Graphic Design/portfolioImg19.png"
import portfolioimg20 from "../../assets/Graphic Design/portfolioImg20.png"
import footerlogo from '../../assets/Graphic Design/footerlogo.png'


const MotionDesign = () => {
  return (
    <>
      <div className="all bg-black text-white pt-[55px] font-Outfit">
        <h1 className='text-[14px] text-[#00FFFF] text-center font-semibold'>LEARN INDUSTRY BASED</h1>
        <h1 className='text-white md:text-[52px] text-[42px] text-center font-semibold'>Motion Design Course</h1>
        <p className='md:text-[18px]  text-[#C5C7CC] text-center xl:mx-[300px] lg:mx-[200px] md:mx-[100px] mx-5 mt-5'> Learn graphic design that is specific to an industry-based graphic design course.
          Crafting Creativity, Shaping Industries: Unleash Your Design Potential!</p>
        <img className='w-full ' src={subheadingImg} alt="" />


        {/* ----------------FUTURE----------------- */}
        <div className="future lg:flex lg:justify-between font-Outfit">
          <div className="left-side text-center pt-[79px]">
            <div className='lg:w-[532px] sm:text-[32px] text-[25px] font-bold lg:text-left text-center'>
              <h1 className='text-[#00FFFF] '>Design Your Future:</h1>
              <h1>Unleash Your Creativity and</h1>
              <h1>  Master Graphic Excellence!</h1>
            </div>

            <div className="lg:w-[532px] pt-5 lg:text-left text-center lg:mx-auto md:mx-[100px] sm:mx-[50px] mx-5">
              <p className='text-[#C5C7CC]'>Rank One Camp offers a <span className='text-[#FAFF00]'>four-month-long course</span> in graphic design that teaches students how to create graphics for various mediums and platforms, including computer graphics, multimedia, and web design.</p>

              <p className='text-[#FAFF00] pt-[50px]'>This course aims to provide you with the following benefits:</p>


              <div className="lists pt-3 space-y-2">
                <div className="list1 flex space-x-4">
                  <i class="fa-solid fa-check text-[#00FFFF] text-[12px]  pt-2"></i>
                  <p>Industry based learning.</p>
                </div>
                <div className="list1 flex space-x-4">
                  <i class="fa-solid fa-check text-[#00FFFF] text-[12px] pt-2"></i>
                  <p>After compiling the course, we will provide guidance for 6 months.</p>
                </div>

                <div className="list1 flex space-x-4">
                  <i class="fa-solid fa-check text-[#00FFFF] text-[12px]  pt-2"></i>
                  <p>Creating an advanced portfolio and provide you a certificate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightside lg:mt-0 mt-[50px] flex lg:justify-normal justify-center mx-5">
            <img className='w-[560px] h-[560px]' src={futureImg} alt="" />
          </div>
        </div>

        {/* ------------------syllabus------------------ */}
        <div className="bg-white my-[62px] pb-[32px]">
          <h1 className='text-black text-[32px] font-bold text-center pt-[64px]'>Syllabus of Graphic Design Course</h1>

          <div className="syllabus  grid md:grid-cols-2 md:gap-20 2xl:px-[112px] xl:px-[80px] lg:px-[40px] md:px-[40px] sm:px-[70px] px-10  my-[62px] md:space-y-0 space-y-10">
            <div className="adobe">
              <h1 className='text-black text-[22px] font-semibold'>Adobe Photoshop</h1>

              <ul className='list-disc text-[#5F6D7E] mt-3'>
                <li>Introduction to interface, tools, effects, exports</li>
                <li>Working with layers, images, shapes, masking</li>
                <li>Camera raw filter, effects, vanishing point, displacement map</li>
                <li>Typography: pairing font combinations, sizes, modern fonts</li>
                <li>Color theory: color principles</li>
                <li>Understand industry style and standard designs</li>
                <li>Working with gifs and 3d shapes</li>
                <li>Manipulating with images, posters, banners</li>
              </ul>
            </div>

            <div className="illustrator">
              <h1 className='text-black text-[22px] font-semibold'>Adobe Illustrator</h1>
              <ul className='list-disc text-[#5F6D7E] mt-3'>
                <li>Introduction to interface, tools, effects, exports</li>
                <li>Working with layers, images, shapes, masking</li>
                <li>Vector graphics & designs</li>
                <li>Typography: pairing font combinations, sizes, modern fonts</li>
                <li>Color theory: color principles</li>
                <li>Understand industry style and standard designs</li>
                <li>Logo Design and it’s principles</li>
                <li>Vector Illustrations and colors</li>
              </ul>
            </div>

            <div className="adobe_premeries">
              <h1 className='text-black text-[22px] font-semibold'>Adobe Premiere Pro</h1>
              <ul className='list-disc text-[#5F6D7E] mt-3'>
                <li>Introduction to interface, tools, effects, exports</li>
                <li>Working with layers, images, shapes, masking</li>
                <li>Working with gifs, video edits and motion graphics</li>
                <li>Typography and color theory</li>
                <li>Understand industry style video edits and basic animation</li>
                <li>Working with different video edit styles</li>
              </ul>
            </div>

            <div className="Portfolio">
              <h1 className='text-black text-[22px] font-semibold'>Portfolio</h1>
              <ul className='list-disc text-[#5F6D7E] mt-3'>
                <li>Stationery designs, banners, posters</li>
                <li>Graphic post designs, gifs</li>
                <li>Photo edits, color corrections, photo retouching</li>
                <li>Logo Designs, illustrations, character and environment designs</li>
                <li>Video edit: shorts, wedding, YouTube shorts and long videos etc.</li>
                <li>Assistance with portfolio presentation, interviews, client interaction, and task management.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------PORTFOLIO----------------- */}
        <section className='2xl:mx-[112px] xl:mx-[80px] lg:mx-[40px] sm:mx-[20px] mx-5'>
          <h1 className='text-[32px] text-center'>Portfolio</h1>
          <p className='text-[#00FFFF] text-center sm:mx-auto mx-10'>
            These are some of the projects and work that we will be working on.
          </p>

          <div className="photos sm:grid md:grid-cols-3 mt-[64px] gap-5">
            <div className="img sm:w-auto w-full h-[412px] mt-5">
              <img className="sm:w-auto w-full h-[412px]" src={portfolioimg1} alt="" />
            </div>
            <div className="img0 sm:w-auto w-full h-[304px] mt-5">
              <img className='sm:w-auto w-full' src={portfolioimg2} alt="" />
            </div>
            <div className="img0 sm:w-auto w-full h-[509px] mt-5">
              <img className="sm:w-auto w-full " src={portfolioimg3} alt="" />
            </div>
            <div className="img04 sm:w-auto w-full h-[304px] sm:-mt-[100px] mt-5">
              <img className="sm:w-auto w-full" src={portfolioimg4} alt="" />
            </div>
            <div className="img05 sm:w-auto w-full  h-[550px] sm:-mt-[220px] mt-5">
              <img className="h-[550px] sm:w-auto w-full  " src={portfolioimg5} alt="" />
            </div>

            <div className="img06 2xl:h-[430px] xl:h-[530px] lg:h-[630px] h-[700px] sm:w-auto w-full 2xl:-mt-0 xl:-mt-[105px] lg:-mt-[160px] sm:-mt-[220px] mt-5">
              <img className="2xl:h-[430px] lg:h-[530px] h-[700px]  sm:w-auto w-full" src={portfolioimg6} alt="" />
            </div>

            <div className="img07 xl:w-auto w-full xl:h-[530px] h-[630px] xl:-mt-[220px] sm:-mt-[350px] mt-5">
              <img className="sm:w-auto w-full xl:h-[530px] h-[630px]" src={portfolioimg7} alt="" />
            </div>
            <div className="img08 sm:w-auto w-full h-[431px] xl:-mt-[100px] sm:-mt-[150px] mt-5">
              <img className="sm:w-auto w-full h-[431px]" src={portfolioimg8} alt="" />
            </div>
            <div className="img09 sm:w-auto w-full xl:h-[335px] h-full xl:-mt-[10px] lg:-mt-[90px] mt-5">
              <img className=" 2xl:w-auto w-full xl:h-[335px] lg:h-[365px] h-full" src={portfolioimg9} alt="" />
            </div>
            <div className="img10  col-span-3 mt-5 h-[188px]">
              <img className='w-full   h-[188px]' src={portfolioimg10} alt="" />
            </div>
          </div>

          <div className="secondgrid sm:grid sm:grid-cols-3 gap-5 mt-5">
            <div className="img11 h-[412px] mt-5">
              <img className='h-[412px]' src={portfolioimg11} alt="" />
            </div>
            <div className="img12 h-[304px] mt-5 ">
              <img className='h-[304px]' src={portfolioimg12} alt="" />
            </div>
            <div className="img13 h-[637px] mt-5 ">
              <img className='h-[637px]' src={portfolioimg13} alt="" />
            </div>
            <div className="img14 h-[304px] sm:-mt-[220px] mt-5">
              <img className='h-[304px]' src={portfolioimg14} alt="" />
            </div>
            <div className="img15 h-[636px] sm:-mt-[325px] mt-5">
              <img className='h-[636px]' src={portfolioimg15} alt="" />
            </div>
            <div className="img16 h-[412px]">
              <img className='h-[412px]' src={portfolioimg16} alt="" />
            </div>
            <div className="img17 h-[655px] sm:-mt-[325px] mt-5">
              <img className='h-[655px]' src={portfolioimg17} alt="" />
            </div>
            <div className="img18 h-[431px] sm:-mt-[105px] mt-5">
              <img className='h-[431px]' src={portfolioimg18} alt="" />
            </div>
            <div className="img19 h-[322px] mt-5">
              <img className='h-[322px]' src={portfolioimg19} alt="" />
            </div>
            <div className="img20 h-[1216px] col-span-3 mt-5">
              <img className='h-[1216px] w-full' src={portfolioimg20} alt="" />
            </div>
          </div>
        </section>


        {/* ----------FOOTER------------- */}
        <section className='mb-12'>
          <div className="text-[#272D37] bg-white text-[28px] text-center space-y-8 pt-[96px] mt-1 pb-[148px] lg:px-[100px] sm:px-[70px] px-3">
            <h1>You can learn at your own pace with our online facilities. </h1>
            <h1>Choose from morning or evening classes.</h1>
            <h1 >We offer industry-based learning and support for internships and job placement.</h1>
          </div>

          <section className='bg-white 2xl:px-[112px] xl:px-[80px] sm:px-[40px] px-7 lg:flex lg:justify-between'>
            <div className="left_side">
              <img className='2xl:w-[564px] xl:w-[464px] lg:w-[364px] w-full xl:h-[332px] lg:h-[330px]' src={footerlogo} alt="" />
            </div>

            <div className="right_side lg:mt-auto mt-10">
              <h1 className='text-[#272D37] text-[18px]'>Rank One Pro Pvt. Ltd.</h1>
              <p className='text-[#5F6D7E] pt-[16px]'>We are a growth-focused institute and digital marketing agency.</p>

              <div className="address pt-[30px]">
                <h1 className='text-[#272D37] text-[18px]'>Address</h1>
                <h2 className='text-[#5F6D7E] pt-3'>
                  Old Baneshwor, Kumari Bank Building Kathmandu</h2>

                <div className="mail text-[#437EF7] flex space-x-2 pt-2">
                  <i class="fa-regular fa-envelope pt-1 text-[18px]"></i>
                  <h1>rankonepro@gmail.com</h1>
                </div>
                <div className="phone text-[#437EF7] flex space-x-2 pt-3">
                  <i class="fa-solid fa-phone pt-1 text-[18px]"></i>
                  <h1>9861859764 ( WhatsApp | Viber )</h1>
                </div>
              </div>
              <div className="social_media pt-5">
                <h1 className='text-[18px] text-[#272D37]'>Social Media</h1>
                <div className="icons flex text-black space-x-4 pt-3">
                  <i class="fa-brands fa-facebook border-[1px] border-[#DAE0E6] rounded-[5px] px-1 py-1"></i>
                  <i class="fa-brands fa-figma border-[1px] border-[#DAE0E6] rounded-[5px] px-1 py-1"></i>
                  <i class="fa-brands fa-twitter border-[1px] border-[#DAE0E6] rounded-[5px] px-1 py-1"></i>
                  <i class="fa-brands fa-linkedin border-[1px] border-[#DAE0E6] rounded-[5px] px-1 py-1"></i>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div >
    </>
  )
}
export default MotionDesign