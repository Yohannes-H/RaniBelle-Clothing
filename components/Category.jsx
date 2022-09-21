import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import CategoryAnimator from "./CategoryAnimator";
function Category() {
  const Parentref = useRef();

  const TT = gsap.timeline({ defaults: { duration: 1.2 } });

  const nightDress = useRef(null);
  const weddingDress = useRef(null);

  return (
    <div className="categoryContainer">
      <div className="categoryListContainer">
        <ul className="categoryList">
          <li>
            <span
              id="nightdress"
              className="listItem"
              onMouseEnter={() => {
                Parentref.current.animmateImage(
                  "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                );
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
                Parentref.current.animmateImage(
                  "https://wallpaperaccess.com/full/6767303.jpg"
                );
              }}
              ref={weddingDress}
            >
              Wedding Dress
            </span>
          </li>

          <li>
            <span className="listItem">Bridesmaid Dress</span>
          </li>
        </ul>
      </div>

      <CategoryAnimator TT={TT} ref={Parentref} />
    </div>
  );
}

export default Category;
