import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Router from "../Router/Router";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useLocation } from "react-router-dom";

const Layout = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.1,
    });

    setLocomotiveInstance(scroll);

    const handleRouteChange = () => {
      setTimeout(() => {
        scroll.update();
      }, 100);
    };

    handleRouteChange();

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [location]);

  useEffect(() => {
    if (locomotiveInstance) {
      locomotiveInstance.update();
    }
  }, [locomotiveInstance]);

  return (
    <>
      <Header locomotiveInstance={locomotiveInstance} />
      <div ref={scrollRef} data-scroll-container>
        <Router />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
