import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaWhatsapp,
} from "react-icons/fa";
import { socialLinks } from "../../utils/helpers";

const socialItems = [
  { Icon: FaGithub, href: socialLinks.github, label: "GitHub" },
  { Icon: FaWhatsapp, href: socialLinks.whatsapp, label: "WhatsApp" },
  { Icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
  { Icon: FaEnvelope, href: `mailto:${socialLinks.email}`, label: "Email" },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--cr-text)", color: "var(--cr-bg)" }}
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full grid-bg" />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="text-center lg:text-left">
            <motion.span
              className="font-heading text-4xl sm:text-5xl inline-block"
              style={{ color: "var(--cr-primary)" }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              TA
            </motion.span>
            <p
              className="font-heading-alt text-2xl sm:text-3xl mt-1 uppercase tracking-wider"
              style={{ color: "var(--cr-bg)" }}
            >
              Taufiq Andrian
            </p>
            <p
              className="font-body text-sm mt-1"
              style={{ color: "var(--cr-text-subtle)" }}
            >
              Fullstack Web Developer
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            {socialItems.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--cr-text)",
                  color: "var(--cr-bg)",
                  border: "2px solid var(--cr-text-subtle)",
                }}
                whileHover={{ scale: 1.1, y: -3, borderColor: "var(--cr-bg)" }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <p
              className="font-body text-sm flex items-center justify-center lg:justify-end gap-1"
              style={{ color: "var(--cr-text-muted)" }}
            >
              Made with <FaHeart className="text-red-500" /> by Taufiq Andrian
            </p>
            <p
              className="font-body text-xs mt-1"
              style={{ color: "var(--cr-text-subtle)" }}
            >
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: "1px solid var(--cr-text-subtle)" }}
        >
          <motion.button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 font-body font-bold text-xs sm:text-sm uppercase rounded-lg"
            style={{
              backgroundColor: "var(--cr-primary)",
              color: "var(--cr-text)",
              border: "3px solid var(--cr-border)",
              boxShadow: "4px 4px 0px var(--cr-border)",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
