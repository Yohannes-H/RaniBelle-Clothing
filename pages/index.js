import Head from "next/head";
//import Image from "next/image";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";

import Category from "../components/Category";
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Modal from "../components/Modal";
import { appContext } from "../context/context";
export default function Home() {
  const { modal } = appContext();
  return (
    <>
      {modal && <Modal />}
      <Slider />
      <div className="home">
        <Navbar />

        <div className="wrapper">
          <SlideShow />
          <MiddleSection />
          <Category />
        </div>
        <Location />
        <Footer />
      </div>
    </>
  );
}
