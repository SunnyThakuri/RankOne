import { useState } from "react";
import DesignandBranding from "../OurServices/DesignandBranding"
import Development from "../OurServices/Development"
import Production from "../OurServices/Production"
import DigitalMarketing from "../OurServices/DigitalMarketing"
import Animation from "../OurServices/Animation"
import "../../../style/ServiceUIHOme.css"

const Responsive = () => {
  //Color
  const [clickedText, setClickedText] = useState(null);
  const getTextColor = (text) => {
    if (clickedText === text) {
      return 'text-black';
    } else {
      return 'text-[#CCCCCC]';
    }
  };

  const [selected, setSelected] = useState('DesignandBranding')
  const [show, setShow] = useState(true)

  const [isActive, setIsActive] = useState(false);
  const handleClick = (text) => {
    setIsActive(!isActive);
    setClickedText(text);
  };

  //UNDERLINE TRANSFORM
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className="responsive_design lg:block">

        <div className="our_services bg-white pt-[10px] pb-[50px] mt-[100px]">
          <h1 className="font-Outfit px-[80px] pt-[20px] text-[#0B091C] text-[20px] font-semibold">Our Services:</h1>


          <div className="services px-10px sm:px-[20px] md:px-[50px] pt-[20px] space-y-5">


            <div className="">
              <div className={`btn ${activeButton === 1 ? 'active' : ''}`}
                onClick={() => handleButtonClick(1)}>
                <div onClick={() => { setShow(true); setSelected("DesignandBranding"); handleClick('text1') }}>
                  <div className={`cursor-pointer ${clickedText === null ? 'text-black' : getTextColor('text1')}`}>

                    <div className="flex justify-between">
                      <h1 className="text-[24px] font-bold  ">
                        DESIGN</h1>
                      <p><i class="fa-solid fa-plus"></i></p>
                    </div>
                    <p className="font-semibold">Translating brand objectives into actionable outcomes</p>
                  </div>
                </div>
              </div>
              {show ? <DesignandBranding /> : null}
            </div>


            <div className="">
              <div className={`btn ${activeButton === 2 ? 'active' : ''}`}
                onClick={() => handleButtonClick(2)}>
                <div onClick={() => { setShow(false); setSelected("Development"); handleClick('text2') }}>

                  <div className={`cursor-pointer ${getTextColor('text2')}`}>
                    <div className="flex justify-between">
                      <h1 className="text-[24px] font-bold  ">
                        DEVELOPMENT</h1>
                      <p><i class="fa-solid fa-plus"></i></p>
                    </div>
                    <p className="font-semibold">Translating brand objectives into actionable outcomes</p>
                  </div>
                </div>
              </div>
              {selected === "Development" ? <Development /> : ""}
            </div>



            <div className="">
              <div className={`btn ${activeButton === 3 ? 'active' : ''}`}
                onClick={() => handleButtonClick(3)}>
                <div onClick={() => { setShow(false); setSelected("Production"); handleClick('text3') }} >
                  <div className={`cursor-pointer  ${getTextColor('text3')}`}>
                    <div className="flex justify-between">
                      <h1 className="text-[24px] font-bold  ">
                        PRODUCTION</h1>
                      <p><i class="fa-solid fa-plus"></i></p>
                    </div>
                    <p className="font-semibold">Translating brand objectives into actionable outcomes</p>
                  </div>
                </div>
              </div>
              {selected === "Production" ? <Production /> : ""}
            </div>


            <div className="">
              <div className={`btn ${activeButton === 4 ? 'active' : ''}`}
                onClick={() => handleButtonClick(4)}>
                <div onClick={() => { setShow(false); setSelected("Digital Marketing"); handleClick('text4') }} >
                  <div className={`cursor-pointer  ${getTextColor('text4')}`}>
                    <div className="flex justify-between">
                      <h1 className="text-[24px] font-bold  ">
                        DIGITAL MARKETING</h1>
                      <p><i class="fa-solid fa-plus"></i></p>
                    </div>
                    <p className="font-semibold">Translating brand objectives into actionable outcomes</p>
                  </div>
                </div>
              </div>
              {selected === "Digital Marketing" ? <DigitalMarketing /> : ""}
            </div>




            <div className="">
              <div className={`btn ${activeButton === 5 ? 'active' : ''}`}
                onClick={() => handleButtonClick(5)}>
                <div onClick={() => { setShow(false); setSelected("Animation"); handleClick('text5') }} >
                  <div className={`cursor-pointer ${getTextColor('text5')}`}>
                    <div className="flex justify-between">
                      <h1 className="text-[24px] font-bold  ">
                        ANIMATION</h1>
                      <p><i class="fa-solid fa-plus"></i></p>
                    </div>
                    <p className=" font-semibold">Translating brand objectives into actionable outcomes</p>
                  </div>
                </div>
              </div>
              {selected === "Animation" ? <Animation /> : ""}
            </div>




          </div>
        </div>
      </div >



    </>
  )
}
export default Responsive