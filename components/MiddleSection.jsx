import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function MiddleSection() {
  gsap.registerPlugin(ScrollTrigger);
  const TT = gsap.timeline({
    defaults: {
      duration: 1.5,
    },
  });
  useLayoutEffect(() => {
    gsap.to(".content1", {
      scrollTrigger: ".description",
      y: "50%",
      duration: 1.5,
    });
    gsap.to(".content2", {
      scrollTrigger: ".description",
      y: "-50%",
      duration: 1.5,
    });
    gsap.to(".middleImage", {
      scrollTrigger: ".middleImage",
      scale: 0.8,
      duration: 1.5,
    });
  }, []);
  return (
    <div className="middleSectionContainer">
      <div className="description">
        <p className="content1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          fugit provident quas corporis vero reprehenderit ipsa in dolorum iusto
          ut dolorem velit error, at totam incidunt quaerat facere ab ducimus!
          Ullam ea sed aperiam maxime repudiandae. Id ea tempora esse
          dignissimos! Labore nulla, numquam soluta fugit accusamus porro id
          perferendis facilis ipsa provident consequatur perspiciatis quaerat
          culpa ut aliquid qui.
        </p>
      </div>
      <div className="images">
        <img className="middleImage" src="/album/img2.jpg" alt="" />
        <img className="middleImage" src="/album/img4.jpg" alt="" />
        <img className="middleImage" src="/album/img7.jpg" alt="" />
      </div>

      <div className="description">
        <p className="content2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          fugit provident quas corporis vero reprehenderit ipsa in dolorum iusto
          ut dolorem velit error, at totam incidunt quaerat facere ab ducimus!
          Ullam ea sed aperiam maxime repudiandae. Id ea tempora esse
          dignissimos! Labore nulla, numquam soluta fugit accusamus porro id
          perferendis facilis ipsa provident consequatur perspiciatis quaerat
          culpa ut aliquid qui.
        </p>
      </div>
    </div>
  );
}

export default MiddleSection;
