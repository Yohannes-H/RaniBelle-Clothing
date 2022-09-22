import React, { useState } from "react";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import Data from "../data/NavigationData";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function Navbar() {
  const TL = gsap.timeline({ defaults: { duration: 1 } });
  function openDrawer() {
    TL.to(".sliderContainer", { display: "none", duration: 0 });
    // TL.to(".wrapper", { display: "none", duration: 0 });
    // TL.to(".wrapper", { scale: 0.9, duration: 1.5 });
    TL.to(".wrapper", { x: "-100%", duration: 1.5 });

    // TL.to(".wrapper", { display: "none", duration: 0 });
    TL.to(".drawer", { x: "0%" }, "-=1.5");
  }

  return (
    <div className="navContainer">
      <div className="left">Left</div>
      <div className="center">
        <div className="brand">
          <h2>RANI BELLE</h2>
        </div>
        <div className="navigation">
          <ul>
            {Data?.map((nav) => {
              return <Navigation key={nav.id} name={nav.name} />;
            })}
          </ul>
        </div>
      </div>
      <div className="right">
        <ShoppingBagOutlinedIcon />
        <AccountCircleOutlinedIcon />
        <MenuOutlinedIcon onClick={openDrawer} />
      </div>
    </div>
  );
}

export default Navbar;
