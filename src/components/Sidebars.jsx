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
import ThemeToggle from "./ThemeToggle";

// 1. DECLARE OUTSIDE: Move the content component here
const SidebarContent = ({ activeSection, closeDrawer, menuItems }) => (
  <div className="flex flex-col h-full bg-base-200 border-r border-base-300 w-64">
    {/* Profile Section */}
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
      <h2 className="text-xl font-bold text-base-content">Mohammad Razib</h2>
      <p className="text-xs uppercase tracking-widest text-primary font-bold mt-1">
        Full Stack Developer
      </p>

      {/* Social Icons */}
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

    {/* Resume Button */}
    <div className="px-6 mb-4">
      <a
        href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-12.pdf"
        download
        className="btn btn-primary btn-outline btn-sm w-full gap-2 normal-case"
      >
        <FaDownload size={12} /> Download CV
      </a>
    </div>

    <div className="divider px-6 my-0 opacity-20"></div>

    {/* Navigation */}
    <nav className="flex-grow px-4 py-4 overflow-y-auto">
      <ul className="menu menu-md gap-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={closeDrawer}
              className={`flex items-center gap-4 py-3 transition-all duration-200 rounded-lg ${
                activeSection === item.id
                  ? "bg-primary text-primary-content font-bold shadow-md"
                  : "hover:bg-base-300"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Theme Toggle Footer */}
    <div className="p-6 border-t border-base-300 flex items-center justify-between bg-base-300/30">
      <span className="text-xs font-semibold opacity-50 uppercase tracking-tighter">
        Theme
      </span>
      <ThemeToggle />
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
      {/* Mobile Drawer Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary btn-square shadow-lg"
        >
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
            ></path>
          </svg>
        </label>
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
