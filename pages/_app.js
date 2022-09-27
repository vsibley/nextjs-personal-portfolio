import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Navbar from '../public/components/Navbar'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
