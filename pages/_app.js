import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import BackToTop from "../Tools/backToTop";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div  className="ease-in-out duration-[2000ms]">
      <Component {...pageProps} />
      <BackToTop/>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
