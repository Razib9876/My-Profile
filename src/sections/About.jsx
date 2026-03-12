import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const birthYear = 1999;
  const age = new Date().getFullYear() - birthYear;
  return (
    <section id="about" className="bg-base-200 py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20 relative group">
          {/* Large Background Watermark */}
          <span className="hidden lg:flex absolute inset-0 text-[120px] font-black text-base-content opacity-[0.03] justify-center items-center tracking-[0.1em] pointer-events-none select-none uppercase font-['Inter']">
            ABOUT ME
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-['Inter'] relative z-10 flex items-center justify-center gap-3">
            <span className="text-base-content">Know Me</span>
            <span className="relative text-blue-600">
              More
              <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-blue-600/10"></span>
            </span>
          </h2>

          {/* Styled Industrial Underline */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
            <div className="w-16 h-[2px] bg-blue-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
          </div>
        </div>
        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Text */}
          <div className="md:col-span-2">
            <h3 className="text-3xl  mb-4">
              I'm <span className="text-primary">Mohammad Razib</span>, a Web
              Developer
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              I build modern and scalable web applications using technologies
              like React, Next.js, Node.js, and MongoDB. My goal is to create
              fast, responsive, and user-friendly digital experiences.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I enjoy solving real-world problems with clean and efficient code.
              I focus on performance, scalability, and maintainable architecture
              while delivering projects that meet client and business needs.
            </p>
          </div>

          {/* Right Info */}
          <div className="space-y-4">
            <div className="border-b pb-2">
              <span className="font-semibold">Name:</span> Mohammad Razib
            </div>

            <div className="border-b pb-2">
              <span className="font-semibold">Email:</span>{" "}
              <span className="text-blue-700"> mohammadrazib987@gmail.com</span>
            </div>

            <div className="border-b pb-2">
              <span className="font-semibold">Age:</span> {age}
            </div>
            <div className="border-b pb-2">
              <span className="font-semibold">From:</span> Bangladesh
            </div>
            {/* Resume Button */}
            <div className=" py-3 mb-4 ">
              <a
                href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
                download
                className="btn btn-primary btn-outline btn-sm w-full gap-2 normal-case"
              >
                <FaDownload size={12} /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <h3 className="text-5xl font-bold text-gray-400">2+</h3>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-gray-400">20+</h3>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-gray-400">30+</h3>
            <p className="mt-2 text-gray-600">Projects Done</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-gray-400">5</h3>
            <p className="mt-2 text-gray-600">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
