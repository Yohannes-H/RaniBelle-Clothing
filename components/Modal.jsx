import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

import { appContext } from "../context/context";
function Modal() {
  const { setModal } = appContext();
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="left">
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email Address" />
          <textarea placeholder="Message" />
          <button>SEND</button>
        </div>
        <div className="right">
          <div className="top">
            <AiOutlineClose
              className="closeIcon"
              onClick={() => {
                setModal((prev) => !prev);
              }}
            />
          </div>
          <div className="middle">
            <BsTelephoneFill className="phoneIcon" />
            <span>Phone</span>
            <span>+2519********</span>
            <MdOutlineAlternateEmail className="emailIcon" />
            <span>Email</span>
            <span>emailaddress@ecommerce.com</span>
          </div>
          <div className="bottom">
            <a href="">
              <FaTiktok />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
