// import { useState, useEffect } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaWhatsapp,
//   FaHome,
//   FaUser,
//   FaCode,
//   FaBriefcase,
//   FaPaperPlane,
//   FaDownload,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";
// import StylishThemeToggle from "./ThemeToggle";

// // 1. DECLARE OUTSIDE: Move the content component here
// const SidebarContent = ({ activeSection, closeDrawer, menuItems }) => (
//   <div className="flex flex-col h-screen bg-base-200 border-r border-base-300 w-64">
//     {/* Profile Section */}
//     <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         className="avatar mb-4"
//       >
//         <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl">
//           <img
//             src="https://i.ibb.co.com/B5HSDQTc/profile-Image-Black-And-White.jpg"
//             alt="Mohammad Razib"
//           />
//         </div>
//       </motion.div>
//       <h2 className="text-xl font-bold ">Mohammad Razib</h2>
//       <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">
//         Full Stack Developer
//       </p>

//       {/* Social Icons */}
//       <div className="flex gap-4 mt-5">
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-all"
//         >
//           <FaGithub size={18} />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-ghost btn-circle btn-sm hover:text-primary"
//         >
//           <FaLinkedin size={18} />
//         </a>
//         <a
//           href="mailto:mohammadrazib987@gmail.com"
//           className="btn btn-ghost btn-circle btn-sm hover:text-primary"
//         >
//           <FaEnvelope size={18} />
//         </a>
//         <a
//           href="https://wa.me/8801723830614"
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-ghost btn-circle btn-sm hover:text-primary"
//         >
//           <FaWhatsapp size={18} />
//         </a>
//       </div>
//     </div>

//     {/* Resume Button */}
//     <div className="px-6 mb-4">
//       <a
//         href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
//         download
//         className={`btn btn-outline w-full gap-2 normal-case btn-sm text-base-content hover:bg-base-200`}
//       >
//         <FaDownload size={12} /> Download CV
//       </a>
//     </div>

//     <div className="divider px-6 my-0 opacity-20"></div>

//     {/* Navigation */}
//     <nav className="flex-grow px-4 py-4 overflow-y-auto justify-center m-auto">
//       <ul className="menu menu-md gap-1">
//         {menuItems.map((item) => (
//           <li key={item.name}>
//             <a
//               href={item.href}
//               onClick={closeDrawer}
//               className={`btn btn-ghost justify-center m-auto w-full gap-4 normal-case ${
//                 activeSection === item.id
//                   ? "bg-base-content text-base-100"
//                   : "text-base-content hover:bg-base-200"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>

//     {/* Theme Toggle Footer */}
//     <div className="p-6 border-t border-base-300 flex items-center justify-between bg-base-300/40 backdrop-blur-sm rounded-t-lg shadow-inner">
//       <span className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
//         Theme
//       </span>

//       <StylishThemeToggle />
//     </div>
//   </div>
// );

// const Sidebar = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   const menuItems = [
//     { name: "Home", icon: <FaHome />, href: "#home", id: "home" },
//     { name: "About", icon: <FaUser />, href: "#about", id: "about" },
//     { name: "Projects", icon: <FaCode />, href: "#projects", id: "projects" },
//     {
//       name: "Experience",
//       icon: <FaBriefcase />,
//       href: "#experience",
//       id: "experience",
//     },
//     {
//       name: "Contact",
//       icon: <FaPaperPlane />,
//       href: "#contact",
//       id: "contact",
//     },
//   ];

//   useEffect(() => {
//     const observerOptions = { threshold: 0.5 };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) setActiveSection(entry.target.id);
//       });
//     }, observerOptions);

//     menuItems.forEach((item) => {
//       const el = document.getElementById(item.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [menuItems]);

//   const closeDrawer = () => {
//     const drawerInput = document.getElementById("my-drawer");
//     if (drawerInput) drawerInput.checked = false;
//   };

//   return (
//     <>
//       {/* Mobile Drawer Toggle */}
//       {/* <div className="lg:hidden  fixed top-4 right-4 z-[60] border-b-1 border-black w-screen  mb-6">
//         <label htmlFor="my-drawer" className="btn  btn-square shadow-lg mb-2 ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="w-6 h-6 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </label>
//       </div> */}

//       <div className="flex justify-between lg:hidden fixed top-0 pt-10 px-8 right-0 z-50 w-screen bg-transparent">
//         <div>
//           <h1>MRAZIB</h1>
//         </div>
//         <div>
//           <label htmlFor="my-drawer" className="">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 stroke-current "
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </label>
//         </div>
//       </div>
//       {/* Fixed Container */}

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed left-0 top-0 h-screen z-50">
//         <SidebarContent activeSection={activeSection} menuItems={menuItems} />
//       </aside>

//       {/* Mobile Drawer */}
//       <div className="drawer lg:hidden">
//         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-side z-[100]">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <div className="min-h-full">
//             <SidebarContent
//               activeSection={activeSection}
//               closeDrawer={closeDrawer}
//               menuItems={menuItems}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import StylishThemeToggle from "./ThemeToggle";

// 1. Sidebar Content Component
const SidebarContent = ({ activeSection, closeDrawer, menuItems }) => (
  <div className="flex flex-col h-screen bg-base-200 border-r border-base-300 w-64">
    <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="avatar mb-4"
      >
        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl">
          <img
            src="https://i.ibb.co.com/B5HSDQTc/profile-Image-Black-And-White.jpg"
            alt="Mohammad Razib"
          />
        </div>
      </motion.div>
      <h2 className="text-xl font-bold ">Mohammad Razib</h2>
      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">
        Full Stack Developer
      </p>

      <div className="flex gap-4 mt-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-all"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-circle btn-sm hover:text-primary"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="mailto:mohammadrazib987@gmail.com"
          className="btn btn-ghost btn-circle btn-sm hover:text-primary"
        >
          <FaEnvelope size={18} />
        </a>
        <a
          href="https://wa.me/8801723830614"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-circle btn-sm hover:text-primary"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </div>

    <div className="px-6 mb-4">
      <a
        href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
        download
        className="btn btn-outline w-full gap-2 normal-case btn-sm text-base-content hover:bg-base-200"
      >
        <FaDownload size={12} /> Download CV
      </a>
    </div>

    <div className="divider px-6 my-0 opacity-20"></div>

    <nav className="flex-grow px-4 py-4 overflow-y-auto justify-center m-auto">
      <ul className="menu menu-md gap-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={closeDrawer}
              className={`btn btn-ghost justify-center m-auto w-full gap-4 normal-case ${
                activeSection === item.id
                  ? "bg-base-content text-base-100"
                  : "text-base-content hover:bg-base-200"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <div className="p-6 border-t border-base-300 flex items-center justify-between bg-base-300/40 backdrop-blur-sm rounded-t-lg shadow-inner">
      <span className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
        Theme
      </span>
      <StylishThemeToggle />
    </div>
  </div>
);

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", icon: <FaHome />, href: "#home", id: "home" },
    { name: "About", icon: <FaUser />, href: "#about", id: "about" },
    { name: "Projects", icon: <FaCode />, href: "#projects", id: "projects" },
    {
      name: "Experience",
      icon: <FaBriefcase />,
      href: "#experience",
      id: "experience",
    },
    {
      name: "Contact",
      icon: <FaPaperPlane />,
      href: "#contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menuItems]);

  const closeDrawer = () => {
    const drawerInput = document.getElementById("my-drawer");
    if (drawerInput) drawerInput.checked = false;
  };

  return (
    <>
      {/* Mobile Sticky Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 w-screen backdrop-blur-sm bg-base-100/70 flex justify-between items-center px-6 py-3">
        {/* Left: Logo */}
        <div className="text-xl font-bold tracking-widest">M. RAZIB</div>

        {/* Right: Drawer Button */}
        <div>
          <label htmlFor="my-drawer" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen z-50">
        <SidebarContent activeSection={activeSection} menuItems={menuItems} />
      </aside>

      {/* Mobile Drawer */}
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-[100]">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="min-h-full">
            <SidebarContent
              activeSection={activeSection}
              closeDrawer={closeDrawer}
              menuItems={menuItems}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
