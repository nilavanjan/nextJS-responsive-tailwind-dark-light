
import DynamicNavbar from "../components/DynamicNavbar";
import Footer from "../components/Footer";
import ImgSlider from "../tools/imgSlider";
import { SliderData } from "../config/ImgConfig";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar/>
      </header>

      <div className="flex-grow">
        <ImgSlider SliderData={SliderData}/>
      </div>

      <footer>
        <Footer />
        
      </footer>
    </div>
  );
}
