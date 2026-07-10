import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../../data/experience";
import { useInView } from "../../hooks/useInView";

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28"
      style={{ backgroundColor: "var(--cr-secondary)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />
      <div className="absolute inset-0 stripe-pattern" />
      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading
          title="Journey"
          subtitle="Education"
          color="bg-accent"
        />

        <div ref={ref} className="relative">
          <div
            className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 hidden lg:block"
            style={{ backgroundColor: "var(--cr-border)" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative mb-5 sm:mb-6 lg:mb-10 last:mb-0"
            >
              <div className="lg:hidden">
                <div
                  className="rounded-2xl p-5 sm:p-6 relative"
                  style={{
                    backgroundColor: "var(--cr-bg-card)",
                    border: "3px solid var(--cr-border)",
                    boxShadow: "6px 6px 0px var(--cr-border)",
                  }}
                >
                  <div className="scrapbook-tape -top-3 left-6" />
                  <span
                    className="inline-block px-3 py-1 rounded-lg font-body font-bold text-xs uppercase mb-2"
                    style={{
                      backgroundColor: exp.color,
                      border: "2px solid var(--cr-border)",
                      color: "var(--cr-text)",
                    }}
                  >
                    {exp.period}
                  </span>
                  <h3
                    className="font-heading text-xl sm:text-2xl"
                    style={{ color: "var(--cr-text)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="font-body font-semibold mt-1 text-sm sm:text-base"
                    style={{ color: "var(--cr-text-muted)" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="font-body mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--cr-text-subtle)" }}
                  >
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-body text-xs sm:text-sm"
                        style={{ color: "var(--cr-text-muted)" }}
                      >
                        <FaCheckCircle className="text-green flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden lg:flex items-start relative">
                <div
                  className={`w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl p-6 relative"
                    style={{
                      backgroundColor: "var(--cr-bg-card)",
                      border: "3px solid var(--cr-border)",
                      boxShadow: "6px 6px 0px var(--cr-border)",
                    }}
                  >
                    <div
                      className="scrapbook-tape -top-3"
                      style={{
                        left: index % 2 === 0 ? "30px" : "auto",
                        right: index % 2 !== 0 ? "30px" : "auto",
                      }}
                    />
                    <span
                      className="inline-block px-3 py-1 rounded-lg font-body font-bold text-xs uppercase mb-2"
                      style={{
                        backgroundColor: exp.color,
                        border: "2px solid var(--cr-border)",
                        color: "var(--cr-text)",
                      }}
                    >
                      {exp.period}
                    </span>
                    <h3
                      className="font-heading text-2xl"
                      style={{ color: "var(--cr-text)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="font-body font-semibold mt-1"
                      style={{ color: "var(--cr-text-muted)" }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="font-body mt-3 text-sm leading-relaxed"
                      style={{ color: "var(--cr-text-subtle)" }}
                    >
                      {exp.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                          className="flex items-center gap-2 font-body text-sm"
                          style={{ color: "var(--cr-text-muted)" }}
                        >
                          <FaCheckCircle className="text-green flex-shrink-0" />
                          <span>{ach}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.1,
                      type: "spring",
                    }}
                    className="w-5 h-5 rounded-full"
                    style={{
                      backgroundColor: exp.color,
                      border: "3px solid var(--cr-border)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
