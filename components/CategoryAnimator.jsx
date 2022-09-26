import React, { useRef, useImperativeHandle, forwardRef } from "react";

function CategoryAnimator({ TT }, ref) {
  const image = useRef();
  const description = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        animateImage(url) {
          image.current.src = url;
          TT.fromTo(
            image.current,
            { opacity: 0.8, scale: 1, filter: "blur(0.7px)" },
            { opacity: 1, scale: 1.2, filter: "blur(0)" }
          );
        },
        reverseImage: () => {
          TT.to(image.current, { opacity: 1, scale: 1, duration: 0 });
        },
      };
    },
    []
  );
  return (
    <div className="contentAnimation">
      <img
        src={"https://wallpaperaccess.com/full/1078694.jpg"}
        alt=""
        className="contentImage"
        ref={image}
      />

      <div className="contentDescription" ref={description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sint
          iste modi assumenda minima dignissimos voluptatibus, praesentium nemo
          temporibus ducimus fugiat non est natus possimus optio? Fuga
          laboriosam recusandae dolore!
        </p>
      </div>
    </div>
  );
}

export default forwardRef(CategoryAnimator);
