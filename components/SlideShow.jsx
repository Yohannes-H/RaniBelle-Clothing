import React from "react";

import { Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function SlideShow() {
  const images = [
    " https://www.pcclean.io/wp-content/gallery/beautiful-women-hd-wallpapers/719441.jpg",
    " https://wallpaperaccess.com/full/1078694.jpg",
    " https://m.economictimes.com/thumb/msid-88402392,width-1200,height-900,resizemode-4,imgsize-50674/aishwarya-rai-bachchan.jpg",
  ];
  return (
    <Slide
      duration={2000}
      arrows={false}
      cssClass="displaySlider"
      easing="ease-in"
    >
      <div className="each-slide-effect">
        <div
          className="imageHolder"
          style={{
            backgroundImage: `linear-gradient(rgba(44,44,44,0.6),rgba(44,44,44,0.6)),url(wed10.jpg)`,
          }}
        >
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="imageHolder"
          style={{
            backgroundImage: `linear-gradient(rgba(44,44,44,0.6),rgba(44,44,44,0.6)),url(https://m.economictimes.com/thumb/msid-88402392,width-1200,height-900,resizemode-4,imgsize-50674/aishwarya-rai-bachchan.jpg)`,
          }}
        >
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="imageHolder"
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>

    // <Zoom scale={1.4} duration={2000} arrows={false} cssClass="zoomSlider">
    //   {images.map((each, index) => (
    //     <div key={index} style={{ width: "100%" }}>
    //       <img
    //         style={{ objectFit: "cover", width: "100%" }}
    //         alt="Slide Image"
    //         src={each}
    //       />
    //     </div>
    //   ))}
    // </Zoom>
  );
}

export default SlideShow;
