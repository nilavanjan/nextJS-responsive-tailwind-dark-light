import DynamicNavbar from "../components/DynamicNavbar";
import Bot from "../components/Bot";

export default function Testpage() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow">testpage</div>

      <footer>
        <Bot />
      </footer>
    </div>
  );
}
