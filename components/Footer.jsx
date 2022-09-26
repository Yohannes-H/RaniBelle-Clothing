import React from "react";

import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="topFooter">
        <div className="left">
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <BsPinterest />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
        </div>
        <div className="center">
          <span className="brandTop">
            Rani Belle <br />
            <span className="brandBottom">Clothing</span>
          </span>
        </div>
        <div className="right"></div>
      </div>

      <div className="bottomFooter">
        <span className="copyRight">
          <FaRegCopyright /> 2016 - 2022 Rani Belle, Inc. All rights reserved.
          Images or logos may not be reproduced without permission.
        </span>
        <div className="companyLogo">
          <span>Developed and Maintained by </span>
          <img src="/album/cmplogo.png" alt="" className="cmpLogo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
