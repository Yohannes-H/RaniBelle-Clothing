import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Drawer.css";
import "../styles/Home.css";
import "../styles/Slider.css";
import "../styles/SlideShow.css";
import "../styles/Category.css";
import "../styles/MiddleSection.css";
import "../styles/About.css";
import "../styles/Footer.css";
import "../styles/Navigation.css";
import "../styles/Location.css";
import "../styles/Modal.css";
import Drawer from "../components/Drawer";

import { useState } from "react";

import { AppContext } from "../context/context";

function MyApp({ Component, pageProps }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ modal, setModal }}>
        <Drawer />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
