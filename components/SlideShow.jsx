import React from "react";
import styles from "../styles/SlideShow.module.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function SlideShow() {
  const images = [
    " https://www.pcclean.io/wp-content/gallery/beautiful-women-hd-wallpapers/719441.jpg",
    " https://www.pcclean.io/wp-content/gallery/beautiful-women-hd-wallpapers/719441.jpg",
    " https://www.pcclean.io/wp-content/gallery/beautiful-women-hd-wallpapers/719441.jpg",
  ];
  return (
    <Zoom scale={1.4} duration={2000} arrows={false}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
}

export default SlideShow;
