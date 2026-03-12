import React from "react";

const Experience = () => {
  const journey = [
    {
      title: "MERN Stack",
      year: "2023",
      desc: "Mastered MongoDB, Express, React, and Node.js through real-world architecture.",
      color: "border-blue-500",
    },
    {
      title: "Backend Core",
      year: "2024",
      desc: "Refined API design, robust validation, and centralized error handling systems.",
      color: "border-orange-500",
    },
    {
      title: "TypeScript",
      year: "2025",
      desc: "Implemented static typing to eliminate runtime bugs and improve maintainability.",
      color: "border-cyan-500",
    },
    {
      title: "Next.js Mastery",
      year: "2025",
      desc: "Optimized performance using SSR, modern routing, and scalable frontend patterns.",
      color: "border-purple-500",
    },
    {
      title: "Safar Project",
      year: "2025",
      desc: "Solved Bangladesh's transport bidding issues with a driver-quote comparison app.",
      color: "border-emerald-500",
    },

    {
      title: "AI & Redux",
      year: "Now",
      desc: "Integrating AI tools and advanced state management for high-scale apps.",
      color: "border-pink-500",
    },
  ];

  return (
    <section
      id="experience"
      className="h-screen w-full flex flex-col items-center justify-center  p-4 md:p-8 overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-['Inter'] relative z-10 flex items-center justify-center gap-3">
          <span className="text-base-content">Learning</span>
          <span className="relative text-blue-600">
            Timeline
            <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-blue-600/10"></span>
          </span>
        </h2>

        <div className="w-20 h-1 bg-blue-700 mx-auto mt-3"></div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl h-full max-h-[70vh]">
        {journey.map((item, index) => (
          <div
            key={index}
            className={`group relative  rounded-3xl p-6 border-1 border-b-5 bg-gray-100 bg-transparent ${item.color} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:animate-ping " />
              </div>
              {/* <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors"> */}
              <h3 className="text-xl font-bold text-slate-600  group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-blue-700 select-none -z-10">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
