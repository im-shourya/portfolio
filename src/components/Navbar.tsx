import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "My Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-4 sm:px-8 lg:px-14 py-3 flex items-center justify-between">
      <Link
        to="/"
        className="text-lg font-bold text-foreground inline-flex items-center gap-1 hover:text-primary transition-colors font-display"
      >
        Shourya
        <span className="text-xs -translate-y-0.5">↗</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm inline-flex items-center gap-1 transition-all duration-300 hover:text-primary ${
              location.pathname === item.path
                ? "font-bold text-primary"
                : "font-medium text-muted-foreground"
            }`}
          >
            {item.label}
            <span className="text-[0.7rem] -translate-y-0.5">↗</span>
          </Link>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 glass p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base inline-flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "font-bold text-primary"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {item.label}
                <span className="text-xs">↗</span>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
