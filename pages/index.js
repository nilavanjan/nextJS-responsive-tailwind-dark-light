import Footer from "../Components/Footer";
import BackToTop from "../Tools/backToTop";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <Navbar />
      </header>

      <div className="flex-grow dark:bg-black">Index</div>

      <footer>
        <Footer />
        <BackToTop />
      </footer>
    </div>
  );
}
