import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import CategoryAnimator from "./CategoryAnimator";
function Category() {
  const [src, setSrc] = useState(null);
  const [desc, setDesc] = useState("");
  //////
  const Parentref = useRef();

  const TT = gsap.timeline({ defaults: { duration: 1.2 } });

  const nightDress = useRef(null);
  const weddingDress = useRef(null);

  function startAnimation(ref) {
    if (ref.current.id === "nightdress") {
      //   console.log(ref.current.id);
      setDesc("");
      setSrc(
        "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      );
      // setSrc("https://wallpaperaccess.com/full/6767303.jpg");
      //TT.fromTo(".contentImage", { scale: 1.2 }, { scale: 1 });
    } else if (ref.current.id === "weddingdress") {
      setDesc("");
      setSrc("https://wallpaperaccess.com/full/6767303.jpg");
      // TT.fromTo(".contentImage", { scale: 1.2 }, { scale: 1 });
    }
  }
  return (
    <div className="categoryContainer">
      <div className="categoryListContainer">
        <ul className="categoryList">
          <li>
            <span
              id="nightdress"
              className="listItem"
              onMouseEnter={() => {
                //startAnimation(nightDress);
                Parentref.current.animmateImage(
                  "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                );
              }}
              onMouseLeave={() => {
                //TT.fromTo(".contentImage", { scale: 1 }, { scale: 1.2 });
                // Parentref.current.reverseImage();
              }}
              ref={nightDress}
            >
              Night Dress
            </span>
          </li>

          <li>
            <span
              id="weddingdress"
              className="listItem"
              onMouseEnter={() => {
                // startAnimation(weddingDress);
                Parentref.current.animmateImage(
                  "https://wallpaperaccess.com/full/6767303.jpg"
                );
              }}
              ref={weddingDress}
              onMouseLeave={() => {
                //TT.fromTo(".contentImage", { scale: 1 }, { scale: 1.2 });
                //    Parentref.current.reverseImage();
              }}
            >
              Wedding Dress
            </span>
          </li>

          <li>
            <span className="listItem">Bridesmaid Dress</span>
          </li>
        </ul>
      </div>

      <CategoryAnimator desc={desc} src={src} TT={TT} ref={Parentref} />
    </div>
  );
}

export default Category;
