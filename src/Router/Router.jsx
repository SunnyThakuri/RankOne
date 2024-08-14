import { Navigate, Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Courses from "../Pages/Courses"

import Insight from "../Pages/Insight"
import Portfolio from "../Pages/Portfolio"
import Home from "../Pages/Home"
import ScrollToTop from "./ScrollToTop"
import Blog from "../Pages/Blog"
import DevelopmentBlogone from "../Components/Blog/DevelopmentBlog/DevelopmentBlogone"
import DevelopmentBlogtwo from "../Components/Blog/DevelopmentBlog/DevelopmentBlogtwo"
import DevelopmentBlogthree from "../Components/Blog/DevelopmentBlog/DevelopmentBlogthree"

import DesignBlogone from "../Components/Blog/DesignBlog/DesignBlogone"
import DesignBlogtwo from "../Components/Blog/DesignBlog/DesignBlogtwo"
import DesignBlogthree from "../Components/Blog/DesignBlog/DesignBlogthree"
import OtherBlogone from "../Components/Blog/OthersBlog/OtherBlogone"
import OtherBlogtwo from "../Components/Blog/OthersBlog/OtherBlogtwo"
import OtherBlogthree from "../Components/Blog/OthersBlog/OtherBlogthree"
import ProjectBlogone from "../Components/Blog/ProjectManagement/ProjectBlogone"
import ProjectBlogtwo from "../Components/Blog/ProjectManagement/ProjectBlogtwo"
import ProjectBlogthree from "../Components/Blog/ProjectManagement/ProjectBlogthree"



const Router = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/insight" element={<Insight />} />

          <Route path="/developmetnblogone" element={<DevelopmentBlogone />} />
          <Route path="/developmentblogtwo" element={<DevelopmentBlogtwo />} />
          <Route path="/developmentblogthree" element={<DevelopmentBlogthree />} />

          <Route path="/designblogone" element={<DesignBlogone />} />
          <Route path="/designblogtwo" element={<DesignBlogtwo />} />
          <Route path="/designblogthree" element={<DesignBlogthree />} />
          <Route path="/othersblogone" element={<OtherBlogone />} />
          <Route path="/othersblogtwo" element={<OtherBlogtwo />} />
          <Route path="/othersblogthree" element={<OtherBlogthree />} />
          <Route path="/projectblogone" element={<ProjectBlogone />} />
          <Route path="/projectblogtwo" element={<ProjectBlogtwo />} />
          <Route path="/projectblogthree" element={<ProjectBlogthree />} />

          <Route path="/blog" element={<Blog />} />

        </Routes>
      </ScrollToTop >
    </>
  )
}
export default Router