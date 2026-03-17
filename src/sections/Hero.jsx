// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { HiOutlineChevronDoubleDown } from "react-icons/hi";
// import skills from "../assets/skills";

// const Hero = () => {
//   const scrollToNext = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative lg:pt-2 pt-8 lg:mb-4 sm:mb-3 min-h-screen w-full flex flex-col items-center bg-base-100 text-base-content overflow-hidden selection:bg-primary selection:text-primary-content"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       <div
//         className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="z-10 w-full max-w-6xl px-4 sm:px-8 flex flex-col flex-grow justify-center py-12 md:py-20">
//         <div className="flex flex-col md:flex-row md:items-end justify-between border-l-4 border-primary pl-4 md:pl-6 mb-10">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-2"
//           >
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//               M. Razib{" "}
//             </h1>
//           </motion.div>

//           <div
//             className="text-base md:text-xl font-semibold"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             <span className="text-primary mr-2">$</span>

//             <TypeAnimation
//               sequence={[
//                 "Full Stack Developer",
//                 2000,
//                 "Writing Scalable Code",
//                 2000,
//                 "Designing Data Architecture",
//                 2000,
//                 "Solving Real Problems",
//                 2000,
//               ]}
//               repeat={Infinity}
//               cursor={true}
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.id}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="relative group bg-base-200/30 border border-base-content/10  p-5 hover:bg-base-200/60 hover:border-primary/40 transition-all duration-300"
//             >
//               {/* <div className="absolute top-4 left-4">
//                 <img
//                   src={skill.logo}
//                   alt={skill.name}
//                   className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition rounded-xl"
//                 />
//               </div> */}

//               {/* <div className="flex justify-between items-center mb-4 mt-3">
//                 <span className="text-[10px] font-bold text-primary/70 tracking-widest uppercase"></span>

//                 <div className="h-px w-4 bg-base-content/20 group-hover:w-12 group-hover:bg-primary/50 transition-all"></div>
//               </div> */}

//               <div className="flex items-center  gap-3 mx-auto">
//                 <img
//                   src={skill.logo}
//                   alt={skill.name}
//                   className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition"
//                 />
//                 <h3 className="text-sm font-bold uppercase group-hover:text-primary transition">
//                   {skill.name}
//                 </h3>
//               </div>

//               <p className="text-xs leading-relaxed opacity-70 group-hover:opacity-100 transition">
//                 {skill.description}
//               </p>

//               <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition"></div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-4 flex flex-col items-center">
//           <motion.button
//             onClick={scrollToNext}
//             whileHover={{ scale: 1.1 }}
//             className="flex flex-col items-center gap-2 group"
//           >
//             <span className="text-xs tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition">
//               Scroll Down
//             </span>

//             <div className="p-2 border border-base-content/20 rounded-full group-hover:border-primary group-hover:text-primary transition">
//               <HiOutlineChevronDoubleDown className="text-lg animate-bounce" />
//             </div>
//           </motion.button>
//         </div>
//       </div>

//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
//     </section>
//   );
// };

// export default Hero;
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { HiOutlineChevronDoubleDown } from "react-icons/hi";
// import skills from "../assets/skills";
// import TechStackVideoEffect from "../components/heroVideo";

// const Hero = () => {
//   const scrollToNext = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full flex flex-col bg-base-100 text-base-content overflow-hidden selection:bg-primary selection:text-primary-content"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* --- BACKGROUND DECOR --- */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* --- MAIN CONTENT CONTAINER --- */}
//       <div className="z-10 w-full max-w-6xl mx-auto px-6 flex flex-col flex-grow">
//         {/* UPPER SECTION: Name & Motion Illusion */}
//         <div className="flex-grow flex flex-col justify-center py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="border-l-4 border-primary pl-6 md:pl-10 space-y-4"
//             >
//               <h1 className="text-4xl md:text-6xl text-gray-800 font-bold tracking-tighter uppercase  leading-none">
//                 M. Razib
//               </h1>

//               <div
//                 className="text-xl md:text-2xl font-mono flex text-gray-500 items-center"
//                 style={{ fontFamily: "'JetBrains Mono', monospace" }}
//               >
//                 <span className="text-primary mr-3 animate-pulse font-bold">
//                   {">"}
//                 </span>
//                 <TypeAnimation
//                   sequence={[
//                     "Full Stack Developer",
//                     2000,
//                     "Writing Scalable Code",
//                     2000,
//                     "Designing Data Architecture",
//                     2000,
//                     "Solving Real Problems",
//                     2000,
//                   ]}
//                   repeat={Infinity}
//                   cursor={true}
//                 />
//               </div>
//             </motion.div>

//             {/* MOTION ILLUSION (Framer Motion Geometric Shapes) */}
//             {/* <div className="hidden lg:flex relative w-48 h-48 items-center justify-center">
//               <motion.div
//                 animate={{
//                   rotate: [0, 90, 180, 270, 360],
//                   borderRadius: ["20%", "50%", "50%", "20%", "20%"],
//                 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="absolute w-32 h-32 border-2 border-primary/30"
//               />
//               <motion.div
//                 animate={{
//                   rotate: [360, 270, 180, 90, 0],
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 className="absolute w-24 h-24 border border-secondary/40"
//               />
//               <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_oklch(var(--p))]" />
//             </div> */}
//             <TechStackVideoEffect></TechStackVideoEffect>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Skills & Scroll (Pinned to bottom) */}
//         {/* LOWER: LOWER HEIGHT SKILL CARDS */}
//         <div className="h-[45%] flex flex-col justify-end ">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill.id}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 // Reduced padding and height
//                 className="border-slate-600 border-1 group relative    p-4 transition-all duration-300 hover:border-primary/40"
//               >
//                 <div className="flex items-center gap-3 mb-2 ">
//                   <div className="    shadow-sm border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform">
//                     <img
//                       src={skill.logo}
//                       alt={skill.name}
//                       className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition"
//                     />
//                   </div>
//                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
//                     {skill.name}
//                   </h3>
//                 </div>
//                 {/* Shortened text display area */}
//                 <p className="text-[10px] leading-tight text-gray-500 dark:text-gray-400 line-clamp-2 group-hover:line-clamp-none transition-all">
//                   {skill.description}
//                 </p>
//                 <div className="absolute top-0 right-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>

//           {/* COMPACT FOOTER */}
//           <div className="mt-4 flex flex-col items-center">
//             <motion.button
//               onClick={scrollToNext}
//               whileHover={{ scale: 1.1 }}
//               className="flex flex-col items-center gap-2 group"
//             >
//               <span className="text-xs tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition">
//                 Scroll Down
//               </span>

//               <div className="p-2 border border-base-content/20 rounded-full group-hover:border-primary group-hover:text-primary transition">
//                 <HiOutlineChevronDoubleDown className="text-lg animate-bounce" />
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Retro Scanline Overlay */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import skills from "../assets/skills";
import TechStackVideoEffect from "../components/heroVideo";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col bg-base-100 text-base-content overflow-hidden selection:bg-primary selection:text-primary-content"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* --- BACKGROUND DECOR --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="z-10 w-full max-w-6xl mx-auto px-6 flex flex-col flex-grow mt-8 md:mt-0">
        {/* UPPER SECTION */}
        <div className="flex-grow flex flex-col justify-center py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-gray-500 pl-6 md:pl-10 space-y-4"
            >
              {/* <h1 className="text-4xl md:text-6xl text-base-content font-bold tracking-tighter uppercase leading-none"> */}
              <h1 className="text-5xl md:text-6xl text-gray-500 tracking-[-0.03em] uppercase leading-[0.95] font-extrabold font-[Montserrat]">
                M. Razib
              </h1>
              <div
                className="text-xl md:text-2xl font-mono flex text-gray-500 items-center"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className=" mr-3 animate-pulse font-bold">{">"}</span>

                <div style={{ perspective: 1000 }}>
                  <motion.p
                    initial={{ rotateX: 90, y: 20, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    style={{ transformOrigin: "top" }}
                    className="text-base-content text-sm uppercase tracking-widest"
                  >
                    Crafting Modern Web Apps
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* TECH STACK VIDEO EFFECT */}
            <div className="w-full md:w-1/2 ">
              <TechStackVideoEffect />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Skills */}
        <div className="pb-10 flex flex-col justify-end">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border-base-content/10 border group relative p-4 transition-all duration-300  bg-base-200/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="  ">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition"
                    />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-base-content">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-[10px] leading-tight opacity-60 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {skill.description}
                </p>
                <div className="absolute top-0 right-0 w-1 h-0 bg-black group-hover:h-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* SCROLL BUTTON */}
          <div className="mt-8 flex flex-col items-center">
            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-xs tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition">
                Scroll Down
              </span>
              <div className="p-2 border border-base-content/20 rounded-full group-hover:border-primary group-hover:text-primary transition">
                <HiOutlineChevronDoubleDown className="text-lg animate-bounce" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Retro Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default Hero;
