import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ColorBlob from "./ColorBlob";
import ParticlesBackground from "./ParticlesBackground";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <ParticlesBackground />
    <ColorBlob position="top-right" />
    <ColorBlob position="bottom-left" />
    <Navbar />
    <main className="flex-1 pt-20 px-5 sm:px-10 lg:px-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
