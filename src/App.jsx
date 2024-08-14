import gsap from "gsap";
import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";

const App = () => {
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    gsap.to(".loading-page", {
      y: -window.innerHeight,
      duration: 0.8,
      delay: 2,
      onComplete: () => {
        gsap.set(".loading-page", { display: "none" });
        setShowLayout(true);
      },
    });

    // Animate the letters
    gsap.fromTo(
      ".logo-name span",
      { color: "white" },
      {
        color: "#0E00BB",
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.inOut",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className={`app-container ${!showLayout ? 'overflow-hidden' : ''}`}>
      {!showLayout && (
        <div className="loading-page fixed inset-0 flex flex-col items-center justify-center bg-white gap-6">
          <div className="name-container font-Outfit h-16">
            <div className="logo-name text-[#0E00BB]  text-[50px] tracking-wider uppercase font-bold ">
              <span className="font-romantica ">R</span>
              <span className="font-romantica ">a</span>
              <span className="font-romantica ">n</span>
              <span className="font-romantica ">k</span>
              <span className="font-romantica "> </span>
              <span className="font-romantica ">O</span>
              <span className="font-romantica ">n</span>
              <span className="font-romantica ">e</span>
            </div>
          </div>
        </div>
      )}
      {showLayout && (
        <div className="content-wrapper">
          <Layout />
        </div>
      )}
    </div>
  ); np
};

export default App;
