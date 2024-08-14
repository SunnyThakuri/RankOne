
import Footer from "../Components/Footer/Footer"
import Blog from "../Components/HomeUI/Blog"
import Client from "../Components/HomeUI/Client"
import ContactUI from "../Components/HomeUI/ContactUI"
import CoursesSlider from "../Components/HomeUI/CoursesSlider"
import ExcitedSection from "../Components/HomeUI/ExcitedSection"
import GrowthUI from "../Components/HomeUI/GrowthUI"
import HomeSlider1 from "../Components/HomeUI/HomeSlider1"
import OurProjectsSlider from "../Components/HomeUI/OurProjectsSlider"
import OurServiceUI from "../Components/HomeUI/OurServiceUI"
import OurWork from "../Components/HomeUI/OurWork"




const Home = () => {
  return (
    <>

      <div className="max-w-[1536px] mx-auto">
        <GrowthUI />
        <HomeSlider1 />
        <OurServiceUI />
        <OurWork />
        <OurProjectsSlider />
        <Client />
        <CoursesSlider />
        <Blog />
        <ExcitedSection />
        <ContactUI />
      </div>


    </>
  )
}
export default Home