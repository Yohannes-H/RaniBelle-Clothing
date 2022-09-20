import { style } from "@mui/system";
import React, { useLayoutEffect } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { gsap } from "gsap";
function Drawer() {
  const TL = gsap.timeline({ defaults: { duration: 1 } });

  useLayoutEffect(() => {}, []);

  function closeDrawer() {
    TL.to(".sliderContainer", { display: "none", duration: 0 });
    TL.to(".drawer", { x: "100%" });
    TL.to(".wrapper", { display: "block", duration: 0 }, "-=1");
    TL.to(".wrapper", { scale: 1 }, "-=1");
  }
  return (
    <div className="drawer">
      <div className="imageContainer">
        <img
          className="img"
          src="https://i.pinimg.com/originals/52/63/23/526323fd2807e2dda85bfa3f0f51f674.jpg"
          alt=""
        />
      </div>
      <div className="menu">
        <ul>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
          <li>Collections</li>
        </ul>

        <CloseOutlinedIcon onClick={closeDrawer} className="close" />
      </div>
    </div>
  );
}

export default Drawer;
