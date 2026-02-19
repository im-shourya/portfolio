// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navItems = [
//   { label: "My Projects", path: "/projects" },
//   { label: "Skills", path: "/skills" },
//   { label: "Experience", path: "/experience" },
//   { label: "Contact Me", path: "/contact" },
// ];

// const Navbar = () => {
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 glass px-4 sm:px-8 lg:px-14 py-3 flex items-center justify-between">
//       <Link
//         to="/"
//         className="text-lg font-bold text-foreground inline-flex items-center gap-1 hover:text-primary transition-colors font-display"
//       >
//         Shourya
//         <span className="text-xs -translate-y-0.5">↗</span>
//       </Link>

//       {/* Desktop nav */}
//       <nav className="hidden md:flex gap-8">
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`text-sm inline-flex items-center gap-1 transition-all duration-300 hover:text-primary ${
//               location.pathname === item.path
//                 ? "font-bold text-primary"
//                 : "font-medium text-muted-foreground"
//             }`}
//           >
//             {item.label}
//             <span className="text-[0.7rem] -translate-y-0.5">↗</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Mobile toggle */}
//       <button
//         onClick={() => setMobileOpen(!mobileOpen)}
//         className="md:hidden text-foreground"
//         aria-label="Toggle menu"
//       >
//         {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//       </button>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute top-full left-0 right-0 mt-2 mx-4 glass p-6 flex flex-col gap-4 md:hidden"
//           >
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className={`text-base inline-flex items-center gap-1 ${
//                   location.pathname === item.path
//                     ? "font-bold text-primary"
//                     : "font-medium text-muted-foreground"
//                 }`}
//               >
//                 {item.label}
//                 <span className="text-xs">↗</span>
//               </Link>
//             ))}
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "My Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-14 py-3 flex items-center justify-between ">
      {/* Glass background layer for the Navbar itself. 
         Separated to allow distinct styling.
      */}
      <div className="absolute inset-0 glass z-[-1]" />

      <Link
        to="/"
        className="relative z-50 text-lg font-bold text-foreground inline-flex items-center gap-1 hover:text-primary transition-colors font-display"
        onClick={() => setMobileOpen(false)}
      >
        Shourya
        <span className="text-xs -translate-y-0.5">↗</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 relative z-50">
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
        className="md:hidden text-foreground relative z-50 hover:text-primary transition-colors p-1"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu - Full Screen Cover with Strong Background */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col gap-8 text-center"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-3xl font-display tracking-tight transition-all duration-300 ${
                      location.pathname === item.path
                        ? "font-bold text-primary scale-110"
                        : "font-medium text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            
            {/* Decoration */}
            <div className="absolute bottom-10 left-0 right-0 text-center">
               <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-4 opacity-50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
