import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Drawer.css";
import "../styles/Home.css";
import "../styles/Slider.css";
import "../styles/SlideShow.css";
import "../styles/Category.css";
import "../styles/MiddleSection.css";
import "../styles/About.css";
import Drawer from "../components/Drawer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Drawer />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
