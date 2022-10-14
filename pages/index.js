import DynamicNavbar from "../components/DynamicNavbar";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow dark:bg-black">Index</div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
