import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import BackToTop from "../Tools/backToTop";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <BackToTop/>
    </ThemeProvider>
  );
}

export default MyApp;
