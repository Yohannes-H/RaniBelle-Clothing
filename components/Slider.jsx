import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function Slider() {
  const TL = gsap.timeline({ defaults: { duration: 1 } });

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useLayoutEffect(() => {
    TL.to(slider1.current, { y: "-100%", duration: 2, delay: 2 });
    TL.to(".home", { y: "0%", duration: 2 }, "-=2.78");
    //TL.to(".home", { visibility: "visible" }, "-=2");
    // TL.to(slider2.current, { y: "-100%", duration: 2.5 });
  }, []);

  return (
    <div className="sliderContainer">
      <div className="introOne" ref={slider1}></div>
      <div className="introTwo" ref={slider2}></div>
    </div>
  );
}

export default Slider;
