import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { HackerText } from "@/components/HackerText";
import MagneticWrapper from "@/components/MagneticWrapper";

const Home = () => (
  <Layout>
    <section className="mt-24 sm:mt-32 lg:mt-40 mb-20 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-baseline gap-x-3 mb-2"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-muted-foreground font-display tracking-tight">
          Hello!
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight">
          I'm <HackerText text="Shourya" className="text-primary" />
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-base sm:text-lg font-light text-primary ml-0 sm:ml-36 mb-10 leading-relaxed"
      >
        <span className="uppercase tracking-widest text-xs font-semibold">
          Computer Science and Engineering Student
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-1 mb-16"
      >
        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          Hello! I'm Shourya Parashar.{" "}
          <strong className="font-semibold text-foreground">
            Computer Science and Engineering student.
          </strong>
        </p>
        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          I love to code and solve.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="ml-0 sm:ml-32"
      >
        <MagneticWrapper>
          <a
            href="#"
            className="gradient-border inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:scale-110"
          >
            Download CV
            <span className="text-sm animate-float">↓</span>
          </a>
        </MagneticWrapper>
      </motion.div>
    </section>
  </Layout>
);

export default Home;
