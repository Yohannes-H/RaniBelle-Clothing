import Head from "next/head";
//import Image from "next/image";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";

import Category from "../components/Category";
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Slider />
      <div className="home">
        <Navbar />

        <div className="wrapper">
          <SlideShow />
          <MiddleSection />
          <Category />
        </div>
        <Footer />
      </div>
    </>
  );
}
