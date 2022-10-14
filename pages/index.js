import Bot from "../components/Bot";
import DynamicNavbar from "../components/DynamicNavbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow dark:bg-black">Index</div>

      <footer>
        <Bot />
      </footer>
    </div>
  );
}
