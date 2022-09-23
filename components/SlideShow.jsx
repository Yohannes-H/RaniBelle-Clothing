import React from "react";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function SlideShow() {
  const images = [
    "https://wallpaperaccess.com/full/1078692.jpg",
    "https://africa-facts.org/wp-content/uploads/2017/10/11-1024x576.jpg",
    "https://wallpaperaccess.com/full/1948600.jpg",
    "https://wallpaperaccess.com/full/1198400.jpg",
    "https://i.pinimg.com/originals/04/d7/57/04d7575ff7fcce66dbfb8e6a6985e303.jpg",
  ];
  return (
    <div className="zoomContainer">
      <Zoom scale={1.2} duration={2000} arrows={false} cssClass="zoomSlider">
        {images.map((each, index) => (
          <div
            key={index}
            style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          >
            <img style={{ objectFit: "cover" }} alt="Slide Image" src={each} />
          </div>
        ))}
      </Zoom>
      <span className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa ab
        cumque tenetur laborum. Minus dolores illo ratione et, aperiam alias
        laborum voluptate odit nemo ad? Excepturi quos labore corporis.
      </span>
    </div>
  );
}

export default SlideShow;
