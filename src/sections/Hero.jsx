import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import skills from "../assets/skills";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative lg:pt-2 pt-8 lg:mb-4 sm:mb-3 min-h-screen w-full flex flex-col items-center bg-base-100 text-base-content overflow-hidden selection:bg-primary selection:text-primary-content"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="z-10 w-full max-w-6xl px-4 sm:px-8 flex flex-col flex-grow justify-center py-12 md:py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-l-4 border-primary pl-4 md:pl-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <p className="text-xs tracking-[0.3em] text-primary font-semibold uppercase">
              // System.Architect.Initialize
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              M. Razib{" "}
            </h1>
          </motion.div>

          <div
            className="text-base md:text-xl font-semibold"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-primary mr-2">$</span>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Writing Scalable Code",
                2000,
                "Designing Data Architecture",
                2000,
                "Solving Real Problems",
                2000,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>

        {/* Terminal */}
        {/* <div className="mb-12">
          <div className="bg-base-200/60 border border-base-content/10 rounded-lg p-5 backdrop-blur-md">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div className="w-3 h-3 rounded-full bg-success"></div>
            </div>
          </div>
        </div> */}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group bg-base-200/30 border border-base-content/10 rounded-xl p-5 hover:bg-base-200/60 hover:border-primary/40 transition-all duration-300"
            >
              {/* Skill Logo */}
              <div className="absolute top-4 left-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition"
                />
              </div>

              {/* Module Label */}
              <div className="flex justify-between items-center mb-4 mt-6">
                <span className="text-[10px] font-bold text-primary/70 tracking-widest uppercase"></span>

                <div className="h-px w-8 bg-base-content/20 group-hover:w-12 group-hover:bg-primary/50 transition-all"></div>
              </div>

              {/* Skill Name */}
              <h3 className="text-sm font-bold uppercase mb-2 group-hover:text-primary transition">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed opacity-70 group-hover:opacity-100 transition">
                {skill.description}
              </p>

              {/* Glow Effect */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition"></div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Button */}
        <div className="mt-12 flex flex-col items-center">
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 group"
          >
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition">
              Scroll Down
            </span>

            <div className="p-3 border border-base-content/20 rounded-full group-hover:border-primary group-hover:text-primary transition">
              <HiOutlineChevronDoubleDown className="text-lg animate-bounce" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default Hero;
