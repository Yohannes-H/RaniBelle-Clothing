import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

function Slider() {
  const TL = gsap.timeline();

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useLayoutEffect(() => {
    TL.to(slider1.current, { y: "-100%", duration: 1.5, delay: 2 });
    TL.to(slider2.current, { y: "-100%", duration: 3.5 }, "-=1.6");
  }, []);

  return (
    <div className="sliderContainer">
      <div className="introOne" ref={slider1}></div>
      <div className="introTwo" ref={slider2}></div>
    </div>
  );
}

export default Slider;
