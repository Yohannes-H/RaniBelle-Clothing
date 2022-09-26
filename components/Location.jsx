import Link from "next/link";
import React from "react";

function Location() {
  return (
    <div className="locationContainer">
      <span className="top">Rani Belle</span>
      <span className="bottom">Clothing</span>
      <p>
        Follow our socials to stay informed about the latest trends in fashion.
        Plus, be the first to know when we post new contests and giveaways!
      </p>
      <Link href="#" className="link">
        Sign Up
      </Link>
    </div>
  );
}

export default Location;
