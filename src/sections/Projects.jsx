// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import projects from "../assets/projects"; // import JSON

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-6 bg-base-200">
//       <div className="text-center mb-8 relative group">
//         {/* Main Heading */}
//         <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-['Inter']  flex items-center justify-center gap-3">
//           <span className="text-base-content">Featured</span>
//           <span className=" text-blue-600">
//             Projects
//             <span className=" left-0 w-full h-[6px] bg-blue-600/10"></span>
//           </span>
//         </h2>

//         {/* Styled Industrial Underline */}
//         <div className="flex items-center justify-center gap-2 mt-4">
//           <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
//           <div className="w-16 h-[2px] bg-blue-600 rounded-full"></div>
//           <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -10 }}
//             className="card bg-base-100 shadow-xl overflow-hidden border border-base-300"
//           >
//             <figure>
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="h-48 w-full "
//               />
//             </figure>

//             <div className="card-body">
//               <h3 className="card-title text-primary">{project.title}</h3>
//               <p className="text-sm">{project.description}</p>

//               <div className="card-actions justify-start mt-4 flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <div key={tag} className="badge badge-outline">
//                     {tag}
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-4 pt-4 border-t border-base-300">
//                 <a
//                   href={project.github}
//                   className="flex items-center gap-1 text-sm hover:text-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub /> Code
//                 </a>

//                 <a
//                   href={project.link}
//                   className="flex items-center gap-1 text-sm hover:text-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaExternalLinkAlt /> Live Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../assets/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-base-200 min-h-screen py-10 flex items-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header - Same Style as About */}
        <div className="mb-12 border-l-8 border-base-content pl-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-base-content">
            Featured <br />
            <span className="opacity-30">Projects.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pr-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl overflow-hidden border border-base-300"
            >
              <figure>
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-primary">{project.title}</h3>

                <p className="text-sm text-base-content/70">
                  {project.description}
                </p>

                <div className="card-actions justify-start mt-4 flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div key={tag} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 pt-4 border-t border-base-300">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm hover:text-primary transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-sm hover:text-primary transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
