import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="grow pt-20 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
