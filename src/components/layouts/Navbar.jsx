import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { scrollToSection } from "../../utils/helpers";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Services", target: "services" },
  { label: "Gallery", target: "gallery" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => document.getElementById(l.target));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveLink(navLinks[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (target) => {
    setActiveLink(target);
    setIsOpen(false);
    scrollToSection(target);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--cr-bg)",
        boxShadow: scrolled ? "0 2px 0 var(--cr-border)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.button
            type="button"
            onClick={() => handleClick("hero")}
            className="font-heading text-xl sm:text-2xl px-3 sm:px-4 py-2 rounded-lg"
            style={{
              backgroundColor: "var(--cr-primary)",
              color: "var(--cr-text)",
              border: "3px solid var(--cr-border)",
              boxShadow: "4px 4px 0px var(--cr-border)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TA
          </motion.button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.target}
                onClick={() => handleClick(link.target)}
                className="relative px-2.5 py-2 font-body font-semibold text-xs uppercase tracking-wider transition-colors rounded-lg"
                style={{
                  color: "var(--cr-text)",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "var(--cr-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                {link.label}
                {activeLink === link.target && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--cr-text)" }}
                  />
                )}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleClick("contact")}
              className="ml-3 px-5 py-2 text-xs font-body font-bold uppercase rounded-lg"
              style={{
                backgroundColor: "var(--cr-accent)",
                color: "var(--cr-text)",
                border: "3px solid var(--cr-border)",
                boxShadow: "4px 4px 0px var(--cr-border)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl"
            style={{
              backgroundColor: "var(--cr-bg-card)",
              color: "var(--cr-text)",
              border: "3px solid var(--cr-border)",
              boxShadow: "4px 4px 0px var(--cr-border)",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden overflow-hidden"
          style={{
            borderTop: "2px solid var(--cr-border)",
            backgroundColor: "var(--cr-bg)",
          }}
        >
          <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleClick(link.target)}
                className="block w-full text-left px-4 py-2.5 font-body font-semibold text-sm rounded-lg"
                style={{
                  color: "var(--cr-text)",
                  border: "2px solid var(--cr-border)",
                  backgroundColor: "var(--cr-bg-card)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleClick("contact")}
              className="w-full px-5 py-2.5 font-body font-bold text-sm uppercase text-center rounded-lg"
              style={{
                backgroundColor: "var(--cr-accent)",
                color: "var(--cr-text)",
                border: "3px solid var(--cr-border)",
                boxShadow: "4px 4px 0px var(--cr-border)",
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
