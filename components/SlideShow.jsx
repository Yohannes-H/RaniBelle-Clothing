import React from "react";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function SlideShow() {
  const images = [
    " https://www.pcclean.io/wp-content/gallery/beautiful-women-hd-wallpapers/719441.jpg",
    " https://wallpaperaccess.com/full/1078694.jpg",
    " https://m.economictimes.com/thumb/msid-88402392,width-1200,height-900,resizemode-4,imgsize-50674/aishwarya-rai-bachchan.jpg",
  ];
  return (
    <div className="zoomContainer">
      <Zoom scale={1.2} duration={2000} arrows={false} cssClass="zoomSlider">
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="Slide Image"
              src={each}
            />
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
