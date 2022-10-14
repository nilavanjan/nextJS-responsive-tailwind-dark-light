import DynamicNavbar from "../components/DynamicNavbar";

import ImgSlider from "../tools/imgSlider";
import { SliderData } from "../config/ImgConfig";
import Bot from "../components/Bot";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow">
        <ImgSlider SliderData={SliderData} />
      </div>

      <footer>
        <Bot />
      </footer>
    </div>
  );
}
