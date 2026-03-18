// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// const About = () => {
//   const birthYear = 1999;
//   const age = new Date().getFullYear() - birthYear;
//   return (
//     <section id="about" className="bg-base-200 py-20 ">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-20 ">

//           {/* Main Heading */}
//           <h2>
//             <span className="text-base-content">Know Me</span>
//             <span className=" text-blue-600">More</span>
//           </h2>

//           {/* Styled Industrial Underline */}
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
//             <div className="w-16 h-[2px] bg-blue-600 rounded-full"></div>
//             <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
//           </div>
//         </div>
//         {/* Content */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Left Text */}
//           <div className="md:col-span-2">
//             <h3 className="text-3xl  mb-4">
//               I'm <span className="text-primary">Mohammad Razib</span>, a Web
//               Developer
//             </h3>

//             <p className="text-gray-600 mb-4 leading-relaxed">
//               I build modern and scalable web applications using technologies
//               like React, Next.js, Node.js, and MongoDB. My goal is to create
//               fast, responsive, and user-friendly digital experiences.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               I enjoy solving real-world problems with clean and efficient code.
//               I focus on performance, scalability, and maintainable architecture
//               while delivering projects that meet client and business needs.
//             </p>
//           </div>

//           {/* Right Info */}
//           <div className="space-y-4">
//             <div className="border-b pb-2">
//               <span className="font-semibold">Name:</span> Mohammad Razib
//             </div>

//             <div className="border-b pb-2">
//               <span className="font-semibold">Email:</span>{" "}
//               <span className="text-blue-700"> mohammadrazib987@gmail.com</span>
//             </div>

//             <div className="border-b pb-2">
//               <span className="font-semibold">Age:</span> {age}
//             </div>
//             <div className="border-b pb-2">
//               <span className="font-semibold">From:</span> Bangladesh
//             </div>
//             {/* Resume Button */}
//             <div className=" py-3 mb-4 ">
//               <a
//                 href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
//                 download
//                 className="btn btn-primary btn-outline btn-sm w-full gap-2 normal-case"
//               >
//                 <FaDownload size={12} /> Download CV
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
//           <div>
//             <h3 className="text-5xl font-bold text-gray-400">2+</h3>
//             <p className="mt-2 text-gray-600">Years Experience</p>
//           </div>

//           <div>
//             <h3 className="text-5xl font-bold text-gray-400">20+</h3>
//             <p className="mt-2 text-gray-600">Happy Clients</p>
//           </div>

//           <div>
//             <h3 className="text-5xl font-bold text-gray-400">30+</h3>
//             <p className="mt-2 text-gray-600">Projects Done</p>
//           </div>

//           <div>
//             <h3 className="text-5xl font-bold text-gray-400">5</h3>
//             <p className="mt-2 text-gray-600">Awards</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-100 min-h-screen py-24 flex items-center transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Simple Header - Logo Style */}
        <div className="mb-10 border-l-8 border-base-content pl-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-base-content">
            About <br />
            <span className="opacity-30">Me.</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-base-content">
              I'm Mohammad Razib
            </h3>

            <div className="space-y-6 text-lg text-base-content/70 leading-relaxed font-medium">
              <p>
                I studied Management, but later discovered my passion for web
                development and started learning it.
              </p>

              <p className="text-base-content">
                I enjoy solving real-world problems. I built a local solution
                with a bidding system, which challenged me to work with data
                structures, backend logic, and TypeScript as a fresher.
              </p>

              <p>
                Recently, I'm working with local business owners about building
                modern, maintainable custom-coded e-commerce websites and
                improving their branding.
              </p>

              <p className="text-base-content font-bold underline decoration-1 underline-offset-8">
                Currently, I am exploring AI, web design, and no-code tools to
                expand my skills.
              </p>
            </div>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="bg-base-content text-base-100 p-8 rounded-none border border-base-content">
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 opacity-70">
                Core Focus
              </h4>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Real-world problem solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Backend & API development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Scalable architecture focus
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Creative & design interest
                </li>
              </ul>
            </div>

            {/* Subtle Button */}
            <div className="mb-4 mt-6 w-full">
              <a
                href="/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
                download
                className="group w-full py-3 border border-base-content text-base-content hover:bg-base-content hover:text-base-100 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-black disabled:opacity-50"
              >
                <FaDownload size={12} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
