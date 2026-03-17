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

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const birthYear = 1999;
  const age = new Date().getFullYear() - birthYear;

  return (
    // <section id="about" className="bg-base-100 py-20 overflow-hidden mt-96">
    <section
      id="about"
      className="bg-base-100 py-20 overflow-hidden mt-96 sm:mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-base-content">Know Me </span>
            <span className="text-primary">More</span>
          </h2>

          {/* Styled Industrial Underline */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
            <div className="w-16 h-[2px] bg-primary rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-3xl font-bold leading-tight">
              I'm <span className="text-primary">Mohammad Razib</span>, a
              Professional Web Developer
            </h3>
            <p className="text-base-content/70 text-lg leading-relaxed">
              I build modern and scalable web applications using technologies
              like React, Next.js, Node.js, and MongoDB. My goal is to create
              fast, responsive, and user-friendly digital experiences.
            </p>
            <p className="text-base-content/70 text-lg leading-relaxed">
              I enjoy solving real-world problems with clean and efficient code.
              I focus on performance, scalability, and maintainable architecture
              while delivering projects that meet client and business needs.
            </p>
          </motion.div>

          {/* Right Info List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 bg-base-200 p-8 rounded-2xl shadow-sm"
          >
            {[
              { label: "Name", value: "Mohammad Razib" },
              {
                label: "Email",
                value: "mohammadrazib987@gmail.com",
                color: "text-primary",
              },
              { label: "Age", value: age },
              { label: "From", value: "Bangladesh" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-b border-base-300 pb-3 last:border-0"
              >
                <span className="font-bold text-base-content/50 text-sm uppercase mr-2">
                  {item.label}:
                </span>
                <span
                  className={`font-medium ${item.color || "text-base-content"}`}
                >
                  {item.value}
                </span>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="/Mohammad_Razib_Resume.pdf" // Ensure path is correct for public folder
                download
                className="btn btn-primary btn-block gap-2 normal-case shadow-lg"
              >
                <FaDownload size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Happy Clients", value: "20+" },
            { label: "Projects Done", value: "30+" },
            { label: "Awards", value: "5" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h4 className="text-5xl font-extrabold text-base-content/20 mb-2">
                {stat.value}
              </h4>
              <p className="text-base-content/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
