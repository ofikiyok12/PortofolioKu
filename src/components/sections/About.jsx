import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaHeart,
  FaGuitar,
  FaLaptop,
  FaLaravel,
  FaRobot,
  FaMusic,
  FaCloud,
} from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { useInView } from "../../hooks/useInView";
import profilePhoto from "../../assets/fotoku.png";

const funFacts = [
  { icon: FaGuitar, label: "Love Music", color: "bg-accent" },
  { icon: FaLaptop, label: "Love Tech", color: "bg-secondary" },
  { icon: FaHeart, label: "Love Open Source", color: "bg-green" },
  { icon: FaCode, label: "Code Daily", color: "bg-primary" },
];

const timeline = [
  {
    year: "Frontend",
    event: "HTML, CSS, JavaScript, React, Tailwind CSS...",
    icon: FaReact,
    color: "bg-secondary",
  },
  {
    year: "Backend",
    event: "PHP, Laravel, MySQL, AWS Lambda...",
    icon: FaLaravel,
    color: "bg-primary",
  },
  {
    year: "Cloud & DevOps",
    event:
      "Amazon Web Services (S3 Bucket, Lambda, Lex, Iam,...), Vercel, Git/github...",
    icon: FaCloud,
    color: "bg-accent",
  },
  {
    year: "AI & Design",
    event:
      "Prompt Engineering, Claude/OpenCode/ChatGPT, Figma, Adobe Photoshop, Filmora...",
    icon: FaRobot,
    color: "bg-green",
  },
  {
    year: "Di Luar Coding",
    event: "Saya mahir bermain musik dan sangat menyukai game",
    icon: FaMusic,
    color: "bg-accent",
  },
];

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28"
      style={{ backgroundColor: "var(--cr-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="About Me" subtitle="Get To Know" />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8 relative"
              style={{
                backgroundColor: "var(--cr-bg-card)",
                border: "3px solid var(--cr-border)",
                boxShadow: "6px 6px 0px var(--cr-border)",
              }}
            >
              <div className="scrapbook-tape -top-3 left-8" />
              <div className="flex flex-col items-center gap-5 sm:gap-6">
                <div
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: "4px solid var(--cr-border)" }}
                >
                  <img
                    src={profilePhoto}
                    alt="Taufiq Andrian"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="font-heading text-2xl sm:text-3xl"
                    style={{ color: "var(--cr-text)" }}
                  >
                    Taufiq Andrian
                  </h3>
                  <p className="font-body text-accent font-bold uppercase tracking-wider text-xs sm:text-sm mt-1">
                    Web Developer
                  </p>
                  <p
                    className="font-body mt-3 leading-relaxed text-sm sm:text-base"
                    style={{ color: "var(--cr-text-muted)" }}
                  >
                    "Saya lulusan S1 Rekayasa Perangkat Lunak dengan
                    spesialisasi pengembangan frontend dan backend web.
                    Menggabungkan kemampuan teknis coding dan efisiensi
                    teknologi AI melalui keahlian artificial intelligence
                    prompting, serta didukung keterampilan kreatif di bidang
                    desain grafis dan editing video/foto untuk menghadirkan
                    produk digital yang inovatif dan menarik."
                  </p>
                  <p
                    className="font-body mt-2 leading-relaxed text-sm sm:text-base"
                    style={{ color: "var(--cr-text-muted)" }}
                  >
                    "Di luar aktivitas coding, saya gemar mempelajari teknologi
                    terbaru. Ketika memiliki waktu senggang, saya juga
                    menyalurkan hobi melalui musik, gaming, serta editing
                    multimedia."
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h4
                  className="font-fun text-lg sm:text-xl"
                  style={{ color: "var(--cr-text)" }}
                >
                  ⚡ Fun Facts
                </h4>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {funFacts.map((fact) => (
                    <motion.div
                      key={fact.label}
                      className={`${fact.color} rounded-xl p-2 sm:p-3 text-center`}
                      style={{ border: "2px solid var(--cr-border)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <fact.icon
                        className="text-lg sm:text-2xl mx-auto"
                        style={{ color: "var(--cr-text)" }}
                      />
                      <p
                        className="font-body font-bold text-[10px] sm:text-xs mt-1 leading-tight"
                        style={{ color: "var(--cr-text)" }}
                      >
                        {fact.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8 relative"
              style={{
                backgroundColor: "var(--cr-bg-card)",
                border: "3px solid var(--cr-border)",
                boxShadow: "6px 6px 0px var(--cr-border)",
              }}
            >
              <div className="scrapbook-tape -top-3 right-8" />
              <h4
                className="font-heading text-2xl sm:text-3xl mb-6"
                style={{ color: "var(--cr-text)" }}
              >
                📅 Core Tech Stack
              </h4>

              <div className="space-y-5 sm:space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div
                      className={`${item.color} p-2 sm:p-3 rounded-xl flex-shrink-0`}
                      style={{ border: "2px solid var(--cr-border)" }}
                    >
                      <item.icon
                        className="text-base sm:text-xl"
                        style={{ color: "var(--cr-text)" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="px-3 py-1 rounded-lg inline-block font-body font-bold text-xs sm:text-sm"
                        style={{
                          backgroundColor: "var(--cr-text)",
                          color: "var(--cr-bg)",
                        }}
                      >
                        {item.year}
                      </div>
                      <p
                        className="font-body font-semibold mt-1 sm:mt-2 text-sm sm:text-base"
                        style={{ color: "var(--cr-text)" }}
                      >
                        {item.event}
                      </p>
                      <div
                        className="h-1.5 rounded-full mt-2 relative overflow-hidden"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--cr-text) 20%, transparent)",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{
                            duration: 0.8,
                            delay: 0.25 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
