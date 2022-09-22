import Head from "next/head";
//import Image from "next/image";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import Drawer from "../components/Drawer";
import Category from "../components/Category";
import MiddleSection from "../components/MiddleSection";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="wrapper">
        <SlideShow />
        <MiddleSection />
        <Category />
      </div>

      <Slider />
      <Drawer />
    </div>
  );
}
