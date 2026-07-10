import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import {
  FaReact,
  FaGitAlt,
  FaLaptopCode,
  FaStar,
  FaBolt,
  FaDownload,
  FaEye,
  FaAws,
  FaMusic,
  FaFilm,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { scrollToSection } from "../../utils/helpers";
import NeoButton from "../ui/NeoButton";
import profilePhoto from "../../assets/fotoku.png";
import FloatingElement from "../ui/FloatingElement";

function useVariants(reduce) {
  if (reduce) return {};
  return {
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    itemVariants: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      },
    },
  };
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { containerVariants, itemVariants } = useVariants(reduce);
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!photoRef.current || reduce) return;
    const rect = photoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setTilt({ x: y * -10, y: x * 10 });
  }, [reduce]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-16 sm:pt-20 overflow-hidden"
      style={{ backgroundColor: "var(--cr-bg)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--cr-primary) 20%, transparent)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--cr-secondary) 15%, transparent)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--cr-accent) 10%, transparent)",
          }}
        />
      </div>

      {/* Floating stickers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          className="top-28 left-[5%] hidden sm:block"
          delay={0}
          duration={7}
          yOffset={-15}
        >
          <FaStar className="text-3xl text-primary sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="top-40 right-[8%] hidden md:block"
          delay={1.5}
          duration={8}
          yOffset={-12}
        >
          <FaBolt className="text-4xl text-accent sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="bottom-48 right-[10%] hidden lg:block"
          delay={2}
          duration={6}
        >
          <FaReact className="text-5xl text-secondary sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="bottom-56 left-[8%] hidden lg:block"
          delay={0.8}
          duration={9}
        >
          <SiJavascript className="text-4xl text-primary sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="top-1/3 right-[3%] hidden lg:block"
          delay={2.5}
          duration={7}
          yOffset={-10}
        >
          <FaGitAlt className="text-3xl text-accent sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="top-60 left-[2%] hidden sm:block"
          delay={3}
          duration={5}
        >
          <HiSparkles className="text-2xl text-green sticker-shadow" />
        </FloatingElement>
        <FloatingElement
          className="bottom-1/3 right-[15%] hidden lg:block"
          delay={2.2}
          duration={7}
          yOffset={-10}
        >
          <FaAws className="text-4xl text-primary sticker-shadow" />
        </FloatingElement>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[calc(100dvh-5rem)] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-20 py-16 lg:py-20"
        >
          {/* ─── Photo Section ─── */}
          <motion.div
            variants={itemVariants}
            className="z-10 order-1 lg:order-1 flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto"
          >
            <div
              ref={photoRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
              style={{ perspective: "800px" }}
            >
              {/* Animated decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "3px dashed var(--cr-primary)",
                  margin: "-16px",
                }}
                animate={reduce ? false : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px dashed var(--cr-secondary)",
                  margin: "-28px",
                }}
                animate={reduce ? false : { rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo card */}
              <motion.div
                className="w-44 sm:w-52 md:w-60 lg:w-72 rounded-full overflow-hidden"
                style={{
                  border: "6px solid var(--cr-border)",
                  boxShadow: "10px 10px 0px var(--cr-border)",
                  backgroundColor: "var(--cr-bg-card)",
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  transformStyle: "preserve-3d",
                  transformPerspective: "800px",
                }}
                animate={
                  reduce
                    ? false
                    : { y: [0, -8, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Taufiq Andrian"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Badges */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-3 lg:-right-3">
                <motion.span
                  className="text-xl sm:text-2xl lg:text-3xl inline-block"
                  animate={
                    reduce
                      ? false
                      : { y: [0, -8, 0], rotate: [0, 10, -10, 0] }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ⭐
                </motion.span>
              </div>
              <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2">
                <motion.span
                  className="text-base sm:text-xl lg:text-2xl inline-block"
                  animate={
                    reduce
                      ? false
                      : { y: [0, 6, 0], rotate: [0, -10, 10, 0] }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  ⚡
                </motion.span>
              </div>

              {/* Floating tech badges */}
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ top: "-14px", right: "-14px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)" }}
              >
                <FaReact className="text-sm" style={{ color: "var(--cr-secondary)" }} />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>React</span>
              </div>
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ top: "30%", left: "-60px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)", animationDelay: "0.6s" }}
              >
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF7A00' width='14' height='14'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" alt="" className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>Laravel</span>
              </div>
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ bottom: "30%", right: "-52px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)", animationDelay: "1.2s" }}
              >
                <FaAws className="text-sm" style={{ color: "var(--cr-green)" }} />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>AWS</span>
              </div>
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ bottom: "-14px", left: "-14px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)", animationDelay: "1.8s" }}
              >
                <FaFilm className="text-sm" style={{ color: "var(--cr-accent)" }} />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>Filmora</span>
              </div>
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ top: "50%", left: "-68px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)", animationDelay: "0.3s" }}
              >
                <FaMusic className="text-sm" style={{ color: "var(--cr-primary)" }} />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>Music</span>
              </div>
              <div
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full animate-float z-20"
                style={{ bottom: "10%", right: "-55px", backgroundColor: "var(--cr-bg-card)", border: "2px solid var(--cr-border)", boxShadow: "3px 3px 0px var(--cr-border)", animationDelay: "0.9s" }}
              >
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%239B4F96'/%3E%3Ctext x='12' y='17' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='11'%3EVB%3C/text%3E%3C/svg%3E" alt="" className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase whitespace-nowrap" style={{ color: "var(--cr-text)" }}>VB.Net</span>
              </div>
            </div>
          </motion.div>

          {/* ─── Content Section ─── */}
          <div className="z-10 order-2 lg:order-2 lg:flex-1 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 lg:mb-6"
            >
              <span className="inline-block speech-bubble font-fun text-base sm:text-lg md:text-xl bg-primary">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]"
              style={{ color: "var(--cr-text)" }}
            >
              TAUFIQ
              <br />
              <span className="text-accent">ANDRIAN</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-6 lg:mt-8 inline-block"
            >
              <div
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--cr-text)",
                  color: "var(--cr-bg)",
                  boxShadow: "6px 6px 0px var(--cr-border)",
                  border: "3px solid var(--cr-border)",
                }}
              >
                <FaLaptopCode className="text-primary text-lg sm:text-xl flex-shrink-0" />
                <span className="font-heading-alt text-lg sm:text-xl md:text-2xl uppercase tracking-wider whitespace-nowrap">
                  Web Developer
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 lg:mt-8 font-body text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--cr-text-muted)" }}
            >
              Frontend to backend? I make things that actually{" "}
              <strong className="text-secondary">work</strong>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <NeoButton
                onClick={() => scrollToSection("projects")}
                bg="bg-accent"
                textColor="text-white"
                icon={FaEye}
              >
                View Projects
              </NeoButton>
              <NeoButton
                href="/resume.pdf"
                bg="bg-primary"
                textColor="text-dark"
                icon={FaDownload}
              >
                Download Resume
              </NeoButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
