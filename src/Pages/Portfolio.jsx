import { useRef, useState } from "react"
import LogoDesign from "../Components/PortfolioWork/LogoDesign";
import Animation from "../Components/PortfolioWork/Animation";
import PhotosandVideos from "../Components/PortfolioWork/PhotosandVideos";
import DigitalMarketing from "../Components/PortfolioWork/DigitalMarketing";
import WebDevelopment from "../Components/PortfolioWork/WebDevelopment";
import UIandUXdesign from "../Components/PortfolioWork/UIandUXdesign";
import AppDevelopment from "../Components/PortfolioWork/AppDevelopment";
import ArtandIllustration from "../Components/PortfolioWork/ArtandIllustration";
import Others from "../Components/PortfolioWork/Others";
import { SiCodesignal } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaDigitalOcean } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import { GiArtilleryShell } from "react-icons/gi";
import { RiPsychotherapyLine } from "react-icons/ri";
import Design from "../Components/PortfolioWork/Design";
import TwoDAnimation from "../Components/PortfolioWork/TwoDAnimation";
import ThreeDAnimation from "../Components/PortfolioWork/ThreeDAnimation";
import GraphicDesign from "../Components/PortfolioWork/GraphicDesign";
import Branding from "../Components/PortfolioWork/Branding";
import Photos from "../Components/PortfolioWork/Photos";
import Art from "../Components/PortfolioWork/Art";
import Illustration from "../Components/PortfolioWork/Illustration";



const Portfolio = () => {
  const [selected, setSelected] = useState('LogoDesign')
  const [show, setShow] = useState(true)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false);
  const [isDropdownThreeOpen, setIsDropdownThreeOpen] = useState(false);
  const [isDropdownFourOpen, setIsDropdownFourOpen] = useState(false);
  const [isDropdownFiveOpen, setIsDropdownFiveOpen] = useState(false);



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownTwo = () => {
    setIsDropdownTwoOpen(!isDropdownTwoOpen);
  };
  const toggleDropdownThree = () => {
    setIsDropdownThreeOpen(!isDropdownThreeOpen);
  };
  const toggleDropdownFour = () => {
    setIsDropdownFourOpen(!isDropdownFourOpen);
  }; const toggleDropdownFive = () => {
    setIsDropdownFiveOpen(!isDropdownFiveOpen);
  };


  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (

    <>
      <div className="max-w-[1536px] mx-auto ">
        <div className="max-w-[1536px] mx-auto">
          <div className="portfolio lg:flex  font-Outfit  pb-[100px] mt-[50px]">

            <div onClick={toggleMenu} className="menu cursor-pointer mt-[100px] ml-[40px] text-[30px] lg:hidden">
              <i class="fa-solid fa-bars text-white"></i>
            </div>


            <div ref={menuRef} onClick={toggleMenu} value={selected} className="Navigation lg:h-screen h-full lg:z-0 z-[1] lg:fixed absolute top-0 lg:top-[60px] lg:w-[300px] w-full bg-[#141414]  lg:pr-10 pr-5 my-[50px] space-y-3 divide-[#808080]  divide-y-[0.5px] border-r-[0.5px] border-r-[#808080]">

              <div onClick={() => setShow(false)}>
                <div onClick={(e) => { setSelected("Logo Design") }
                } className="flex space-x-3 hover:text-white  pl-10 py-2 rounded-[8px] cursor-pointer text-[#808080] ">
                  <p><SiCodesignal /></p>
                  <h1>Logo Design</h1>
                </div>
              </div>


              {/* ----------------------------DESIGN----------------- */}
              <div onClick={() => setShow(false)}>
                <div className="" onClick={(e) => { setSelected("Design & Branding") }} >
                  <div onClick={() => { setIsDropdownTwoOpen(true); setIsDropdownOpen(false); setIsDropdownThreeOpen(false); setIsDropdownFourOpen(false); setIsDropdownFiveOpen(false); toggleDropdownTwo(); }} className="menu-item group  flex justify-between space-x-3 cursor-pointer pl-10 py-2 rounded-[8px] hover:text-white text-[#808080]" >
                    <div className="flex space-x-3 ">
                      <p><IoMdPhotos /></p>
                      <h1>Graphic Design</h1>
                    </div>

                    <span className="dropdown-arrow">
                      {isDropdownTwoOpen ? '▲' : '▼'}</span>
                  </div>
                </div>
                <div className={`text-[#808080] ml-10 transition-max-height duration-1000 ease-in-out overflow-hidden ${isDropdownTwoOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {isDropdownTwoOpen && (
                    <ul className="list-disc ml-10 g">
                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("Design") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>Design</h1>
                        </div>
                      </li>

                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("Branding") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>Branding</h1>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>


              {/* -----------------ANIMATION------------------- */}
              <div className="" onClick={() => setShow(false)}>
                <div onClick={(e) => { setSelected("2D & 3D Animation") }} className="">
                  <div onClick={() => {
                    setIsDropdownOpen(true); setIsDropdownTwoOpen(false); setIsDropdownThreeOpen(false); setIsDropdownFiveOpen(false);
                    toggleDropdown();
                  }} className="menu-item group  flex justify-between cursor-pointer pl-10 py-2 rounded-[8px]   hover:text-white  text-[#808080]" >
                    <div className="flex space-x-3">
                      <p><MdAnimation /></p>
                      <h1> Animation</h1>
                    </div>

                    <span className="dropdown-arrow">
                      {isDropdownOpen ? '▲' : '▼'}</span>
                  </div>
                </div>

                <div className={`text-[#808080] ml-10 transition-max-height duration-1000 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {isDropdownOpen && (
                    <ul className="list-disc ml-10 ">
                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("2D") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>2D</h1>
                        </div>
                      </li>

                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("3D") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>3D</h1>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>



              {/* -----------------PRODUCTION------------------- */}
              <div onClick={() => setShow(false)}>
                <div
                  onClick={(e) => {
                    setSelected("Photo & Video Production");
                  }}
                >
                  <div
                    onClick={() => {
                      setIsDropdownFiveOpen(true);
                      setIsDropdownOpen(false);
                      setIsDropdownTwoOpen(false);
                      setIsDropdownThreeOpen(false);
                      setIsDropdownFourOpen(false);
                      toggleDropdownFive();
                    }}
                    className="menu-item group flex justify-between space-x-3 cursor-pointer pl-10 py-2 rounded-[8px] hover:text-white text-[#808080]"
                  >
                    <div className="flex space-x-3">
                      <p>
                        <IoMdPhotos />
                      </p>
                      <h1>Production</h1>
                    </div>

                    <span className="dropdown-arrow">
                      {isDropdownFiveOpen ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-[#808080] ml-10 transition-max-height duration-1000 ease-in-out overflow-hidden ${isDropdownFiveOpen ? "max-h-40" : "max-h-0"
                    }`}
                >
                  {isDropdownFiveOpen && (
                    <ul className="list-disc ml-10 g">
                      <li onClick={() => setShow(false)}>
                        <div
                          onClick={(e) => {
                            setSelected("Photos");
                          }}
                          className="Design flex space-x-3 hover:text-white py-2 rounded-[8px] cursor-pointer text-[#808080]"
                        >
                          <h1>Photos</h1>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* -----------------ART & ILLUSTRAITON------------------- */}
              <div onClick={() => setShow(false)}>
                <div className="" onClick={(e) => { setSelected("Art & Illustration") }}>
                  <div onClick={() => {
                    setIsDropdownThreeOpen(true);
                    setIsDropdownFourOpen(false); setIsDropdownFiveOpen(false); setIsDropdownTwoOpen(false); setIsDropdownOpen(false); toggleDropdownThree();
                  }} className="menu-item group flex justify-between space-x-3 cursor-pointer pl-10 py-2 rounded-[8px]hover:text-white hover:text-white text-[#808080] " >

                    <div className="flex space-x-3">
                      <p><GiArtilleryShell /></p>
                      <h1>Art & Illustrations</h1>
                    </div>

                    <span className="dropdown-arrow">
                      {isDropdownThreeOpen ? '▲' : '▼'}</span>
                  </div>
                </div>
                <div className={`text-[#808080] ml-10 transition-max-height duration-1000 ease-in-out overflow-hidden ${isDropdownThreeOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {isDropdownThreeOpen && (
                    <ul className="list-disc pl-10 g">
                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("Art") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>Art</h1>
                        </div>
                      </li>

                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("Illustration") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>Illustration</h1>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* -----------------DIGITAL MARKETING----------------- */}
              <div onClick={() => setShow(false)}>
                <div onClick={(e) => { setSelected("Digital Marketing/Ads") }} className="Design flex space-x-3 hover:text-white pl-10 py-2 rounded-[8px] cursor-pointer text-[#808080]">
                  <p><FaDigitalOcean /></p>
                  <h1>Digital Marketing/Ads</h1>
                </div>
              </div>


              {/* -----------------DEVELOPMENT------------------- */}
              <div onClick={() => setShow(false)}>
                <div className="" onClick={(e) => { setSelected("App Development") }} >
                  <div onClick={() => { setIsDropdownFourOpen(true); setIsDropdownOpen(false); setIsDropdownThreeOpen(false); setIsDropdownTwoOpen(false); toggleDropdownFour(); }} className="menu-item group  flex justify-between space-x-3 cursor-pointer pl-10 py-2 rounded-[8px]  hover:text-white text-[#808080]" >
                    <div className="flex space-x-3 ">
                      <p><IoMdPhotos /></p>
                      <h1>Development</h1>
                    </div>

                    <span className="dropdown-arrow">
                      {isDropdownFourOpen ? '▲' : '▼'}</span>
                  </div>
                </div>
                <div className={`text-[#808080] ml-10 transition-max-height duration-1000 ease-in-out overflow-hidden ${isDropdownFourOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {isDropdownFourOpen && (
                    <ul className="list-disc pl-10 g">
                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("Web Development") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>Web Development</h1>
                        </div>
                      </li>

                      <li onClick={() => setShow(false)}>
                        <div onClick={(e) => { setSelected("App Development") }} className="Design flex space-x-3 hover:text-white  py-2 rounded-[8px] cursor-pointer text-[#808080]">
                          <h1>App Development</h1>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* -----------------UI/UX------------------- */}
              <div onClick={() => setShow(false)}>
                <div onClick={(e) => { setSelected("Ui/Ux Design") }} className="Design flex space-x-3 hover:text-white pl-10 py-3 rounded-[8px] cursor-pointer text-[#808080]">
                  <p><TbBrandWebflow /></p>
                  <h1>Ui/Ux Design</h1>
                </div>
              </div>

              <div onClick={() => setShow(false)}>
                <div onClick={(e) => { setSelected("Others") }} className="Design flex space-x-3 hover:text-white pl-10 py-2 rounded-[8px] cursor-pointer text-[#808080]">
                  <p><RiPsychotherapyLine /></p>
                  <h1>Others</h1>
                </div>
              </div>
            </div>


            {/* -----------------STATE------------------- */}
            <div className="right_side lg:ml-[350px] lg:mx-10 md:mx-[35px] mx-5 lg:mt-[60px] mt-[50px] relative">
              {show ? <LogoDesign /> : null}

              {selected === "Logo Design" ? <LogoDesign /> : ""}


              {selected === "Design & Branding" ? <GraphicDesign /> : ""}
              {selected === "Design" ? <Design /> : ""}
              {selected === "Branding" ? <Branding /> : ""}

              {selected === "2D & 3D Animation" ? <Animation /> : ""}
              {selected === "2D" ? <TwoDAnimation /> : ""}
              {selected === "3D" ? <ThreeDAnimation /> : ""}

              {selected === "Photo & Video Production" ? <PhotosandVideos /> : ""}
              {selected === "Photo" ? <Photos /> : ""}

              {selected === "Digital Marketing/Ads" ? <DigitalMarketing /> : ""}

              {selected === "Web Development" ? <WebDevelopment /> : ""}
              {selected === "App Development" ? <AppDevelopment /> : ""}


              {selected === "Ui/Ux Design" ? <UIandUXdesign /> : ""}
              {selected === "Art & Illustration" ? <ArtandIllustration /> : ""}
              {selected === "Art" ? <Art /> : ""}
              {selected === "Illustration" ? <Illustration /> : ""}


              {selected === "Others" ? <Others /> : ""}
            </div>
          </div >

        </div>
      </div>
    </>
  )
}
export default Portfolio












