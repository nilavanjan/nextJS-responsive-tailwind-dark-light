
import Footer from "../Components/Footer";
import DynamicNavbar from "../components/DynamicNavbar";

export default function Testpage() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow">testpage</div>

      <footer>
        <Footer />
        
      </footer>
    </div>
  );
}
