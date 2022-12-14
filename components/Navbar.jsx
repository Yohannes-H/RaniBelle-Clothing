import React, { useState } from "react";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import Data from "../data/NavigationData";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Head from "next/head";
import Link from "next/link";
import { appContext } from "../context/context";
function Navbar() {
  const router = useRouter();
  const { setModal } = appContext();

  const TL = gsap.timeline({ defaults: { duration: 1 } });
  function openDrawer() {
    TL.to(".sliderContainer", { display: "none", duration: 0 });

    if (router.pathname === "/") {
      TL.to(".wrapper", {
        x: "-100%",
        //position: "absolute",
        // height: "100vh",
        // overflow: "hidden",
        duration: 1.5,
      });
    }

    //or
    else if (router.pathname === "/about") {
      TL.to(".about", {
        x: "-100%",
        // position: "absolute",
        duration: 1.5,
      });
    }

    TL.to(".drawer", { x: "0%" }, "-=1.5");
  }

  return (
    <div className="navContainer">
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <div className="left">
        <div className="brand">
          <span className="brandName">Rani Belle</span>
        </div>
      </div>
      <div className="center">
        <div className="navigation">
          <ul>
            {/* {Data?.map((nav) => {
              return <Navigation key={nav.id} name={nav.name} />;
            })} */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li
              onClick={() => {
                setModal((prev) => !prev);
              }}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <IconButton className="iconContainer">
          <ShoppingBagOutlinedIcon className="cart" />
        </IconButton>
        <IconButton className="iconContainer">
          <AccountCircleOutlinedIcon className="account" />
        </IconButton>

        <IconButton className="iconContainer">
          <MenuOutlinedIcon className="hamBurgerMenu" onClick={openDrawer} />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
