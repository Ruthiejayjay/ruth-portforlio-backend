"use client";
import { motion } from "framer-motion";
import { experienceItems } from "@/data";
import { Download } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "../lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="relative py-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-start gap-10 lg:gap-8"
        >
          {/* Experience List */}
          <div className="w-full max-w-3xl flex flex-col">
            <h2 className="font-mono text-[#9DFFB8] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Experience
            </h2>
            <hr className="h-px bg-white flex-1" />

            {/* Cards stagger in */}
            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experienceItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`py-10 ${
                    i !== experienceItems.length - 1
                      ? "border-b border-[#1f1f1f]"
                      : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-mono text-xs text-[#666] mb-2">
                        {item.period}
                      </p>

                      <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-white mb-1">
                        {item.company}
                      </h3>

                      <p className="text-sm text-[#9a9a9a]">{item.role}</p>
                    </div>

                    {/* Tag */}
                    <span className="font-mono text-xs text-[#777] px-3 py-1 border border-[#2a2a2a] rounded-md">
                      {item.type}
                    </span>
                  </div>

                  {/* Bullets stagger within each card */}
                  <motion.ul
                    variants={staggerContainer(0.08, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-5 space-y-3"
                  >
                    {item.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        variants={staggerItem}
                        className="flex items-start gap-3 text-sm text-[#9a9a9a] leading-relaxed"
                      >
                        <span className="text-green-400 mt-[3px]">▸</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="pt-4"
            >
              <a
                href="/ruth_james_cv.pdf"
                download
                className="font-mono inline-flex items-center gap-2 px-5 py-2.5 text-xl bg-white border border-[#2a2a2a] text-black rounded-md hover:border-green-400 transition"
              >
                Download CV
                <Download size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}