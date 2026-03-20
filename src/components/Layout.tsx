import { Outlet } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import NavDots from "@/components/NavDots";
import Footer from "@/components/Footer";

const Layout = () => (
  <>
    <CustomCursor />
    <ScrollProgress />
    <TopBar />
    <Navbar />
    <NavDots />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
