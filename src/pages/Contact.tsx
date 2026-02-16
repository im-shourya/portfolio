import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Github, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-20 mb-20"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center uppercase mb-12 font-display tracking-tight">
          Say Hi!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 max-w-4xl mx-auto">
          {/* Socials */}
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-primary mb-6 font-display tracking-tight">
              Socialize
            </h2>
            <div className="flex gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-2xl transition-all duration-300 hover:scale-110 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://x.com/im_SParashar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-2xl transition-all duration-300 hover:scale-110 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={28} />
              </a>
              <a
                href="https://github.com/im-shourya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-2xl transition-all duration-300 hover:scale-110 hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-border self-stretch" />

          {/* Form */}
          <div className="glass-strong p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-primary text-center mb-6 font-display tracking-tight">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name*"
                  required
                  className="flex-1 bg-transparent border-b border-border px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary capitalize"
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="flex-1 bg-transparent border-b border-border px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary capitalize"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Contact No."
                className="w-full bg-transparent border-b border-border px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full bg-transparent border-b border-border px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary lowercase"
              />
              <textarea
                name="reason"
                placeholder="Reason*"
                required
                rows={3}
                className="w-full bg-transparent border-b border-border px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="mt-4 bg-primary text-primary-foreground font-bold uppercase text-sm px-8 py-2.5 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsla(190,100%,50%,0.4)] cursor-pointer"
              >
                Send Me
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "hsla(0 0% 0% / 0.6)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="glass-strong p-8 text-center max-w-sm mx-4"
            >
              <p className="text-foreground text-lg mb-6">
                Thanks for contacting!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-primary text-primary-foreground font-medium px-8 py-2 rounded-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_hsla(190,100%,50%,0.4)] cursor-pointer"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Contact;
